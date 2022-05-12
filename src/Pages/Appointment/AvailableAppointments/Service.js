import React from "react";
import PrimaryButton from "../../Shared/Navbar/PrimaryButton/PrimaryButton";

const Service = ({ service }) => {
  const { name, slots } = service;
  return (
    <div class='card lg:max-w-lg bg-base-100 shadow-xl'>
      <div class='card-body text-center'>
        <h2 class='card-title text-secondary justify-center'>{name}</h2>
        <p>
          {slots.length ? (
            <span>{slots[0]}</span>
          ) : (
            <span className='text-red-500'>No Slot Available</span>
          )}
        </p>
        {slots.length === 0 ? (
          <>
            <button
              disabled
              className='btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary'
            >
              Book Appointment
            </button>
          </>
        ) : (
          <>
            <PrimaryButton class='uppercase'>Book Appointment</PrimaryButton>
          </>
        )}
      </div>
    </div>
  );
};

export default Service;
