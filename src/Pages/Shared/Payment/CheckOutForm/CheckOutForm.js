import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const CheckOutForm = ({ appointment }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [CardError, setCardError] = useState("");
  const [paymentSuccess, setpaymentSuccess] = useState("");
  const [trxid, setTrxid] = useState("");
  const [processing, setprocessing] = useState(false);
  const [clientSecret, setClientSecret] = useState("");
  const { _id, patient, patientName, price } = appointment;
  useEffect(() => {
    fetch("https://doc-portal-server.onrender.com/create-payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret);
        }
      });
  }, [price]);
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    setCardError(error?.message || "");
    setpaymentSuccess("");

    /** confirm card payment */
    const { paymentIntent, error: itentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: patientName,
            email: patient,
          },
        },
      });
    if (itentError) {
      setCardError(itentError.message);
      setprocessing(false);
    } else {
      setpaymentSuccess("congrats! your payment is compelte.");
      setTrxid(paymentIntent.id);
      setprocessing(true);

      //store payment information on database
      const payment = {
        appointment: _id,
        trxid: paymentIntent.id,
      };
      fetch(`https://doc-portal-server.onrender.com/booking/${_id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          setprocessing(false);
          console.log(data);
        });
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        {CardError && <p className='text-error mt-4'>{CardError}</p>}
        {paymentSuccess && (
          <p className='text-success mt-4'>
            {paymentSuccess} trxid:
            {trxid}
          </p>
        )}
        <button
          className='btn btn-outline btn-success btn-sm mt-4'
          type='submit'
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>
    </>
  );
};

export default CheckOutForm;
