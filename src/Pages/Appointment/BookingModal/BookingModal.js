import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, date, setTreatment }) => {
  const { name, slots } = treatment;
  const handleBooking = (e) => {
    e.preventDefault();
    const slot = e.target.slot.value;
    console.log(slot);
    setTreatment(null);
  };
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
              <option disabled selected>
                Chose Your Time.
              </option>

              {slots.map((slot) => (
                <option value={slot}>{slot}</option>
              ))}
            </select>
            <input
              type='text'
              name='name'
              placeholder='Full Name'
              className='input input-bordered w-full '
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
            />
            <input type='submit' className='btn btn-secondary w-full' />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
