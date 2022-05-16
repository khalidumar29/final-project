import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import toast from "react-hot-toast";
const BookingModal = ({ treatment, date, setTreatment, refetch }) => {
  const { _id, name, slots } = treatment;
  const foramtteDate = format(date, "PP");
  const handleBooking = (e) => {
    e.preventDefault();
    const slot = e.target.slot.value;
    const booking = {
      treatmentId: _id,
      treatment: name,
      date: foramtteDate,
      slot,
      patientName: user.displayName,
      patient: user.email,
      patientPhoneNumber: e.target.phone.value,
    };
    console.log(booking);
    fetch("http://localhost:3100/booking", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          toast.success(`Appointment is set ${foramtteDate} at ${slot}`);
        } else {
          toast.error(
            `You Already Have an Appointment On ${data.booking?.date} at ${data.booking?.slot}`
          );
        }
        refetch();
        setTreatment(null);
      });
  };
  const [user] = useAuthState(auth);
  return (
    <div>
      <input type='checkbox' id='booking-modal' className='modal-toggle' />
      <div className='modal modal-bottom sm:modal-middle'>
        <div className='modal-box'>
          <label
            htmlFor='booking-modal'
            className='btn btn-sm btn-circle absolute right-2 top-2'
          >
            ✕
          </label>

          <h3 className='font-bold text-lg text-accent '>{name}</h3>
          <form
            onSubmit={handleBooking}
            action=''
            className='pt-5 w-full grid grid-cols-1 gap-3 justify-items-center'
          >
            <input
              type='text'
              disabled
              value={format(date, "PP")}
              className='input input-bordered w-full '
            />
            <select name='slot' className='select select-bordered w-full '>
              {slots.map((slot) => (
                <option key={slots.indexOf(slot) + 1} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type='text'
              name='name'
              placeholder='Full Name'
              className='input input-bordered w-full '
              value={user.displayName}
              readOnly
            />
            <input
              type='text'
              name='phone'
              placeholder='Phone Number'
              className='input input-bordered w-full '
            />
            <input
              type='email'
              name='email'
              placeholder='Email'
              className='input input-bordered w-full '
              value={user.email}
              readOnly
            />
            <input type='submit' className='btn btn-secondary w-full' />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
