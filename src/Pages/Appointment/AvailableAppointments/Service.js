import React from "react";

const Service = ({ service, setTreatment }) => {
  const { name, slots, price } = service;
  return (
    <div className='card lg:max-w-lg bg-base-100 shadow-xl'>
      <div className='card-body text-center'>
        <h2 className='card-title text-secondary justify-center'>{name}</h2>
        <p>
          {slots.length ? (
            <span>{slots[0]}</span>
          ) : (
            <span className='text-red-500'>No Slot Available</span>
          )}
        </p>
        <p>{slots.length > 0 ? slots.length + " spaces available" : ""}</p>
        <p>
          <small className='font-bold'>Price: ${price}</small>
        </p>
        <label
          htmlFor='booking-modal'
          disabled={slots.length === 0}
          onClick={() => setTreatment(service)}
          className='btn btn-primary  text-white font-bold bg-gradient-to-r from-secondary to-primary  uppercase '
        >
          Book Appointment
        </label>
      </div>
    </div>
  );
};

export default Service;
