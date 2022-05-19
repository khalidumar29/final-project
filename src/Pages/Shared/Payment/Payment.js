import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm/CheckOutForm";

const stripePromise = loadStripe(
  "pk_test_51L0ve3AzWRukjgdx6sczebE33YoaCmfzHvm0RxLjyekZFawVsyV5QNIyCRZ2HQOi4oxY98koOESuTnVERgIcULhz00VpYfKBFB"
);
const Payment = () => {
  const { id } = useParams();
  const url = `https://doctors-portal12.herokuapp.com/booking/${id}`;
  const { data: appointment, isLoading } = useQuery(["booking", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div className='card w-50 max-w-md bg-base-100 shadow-xl my-12'>
        <div className='card-body'>
          <p className='text-success'>{appointment.patientName}</p>
          <h2 className='card-title'>{appointment.treatment}</h2>
          <p className='capitalize'>
            your appointment:{" "}
            <span className='text-[orange]'>{appointment.date}</span> at{" "}
            <span className='text-success'>{appointment.slot}</span>
          </p>
          <p>Please Pay: ${appointment.price}</p>
          <div className='card-actions justify-end'>
            <button className='btn btn-primary'>Buy Now</button>
          </div>
        </div>
      </div>
      <div className='card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100'>
        <div className='card-body'>
          <Elements stripe={stripePromise}>
            <CheckOutForm appointment={appointment} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
