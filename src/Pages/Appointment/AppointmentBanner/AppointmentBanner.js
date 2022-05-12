import React, { useState } from "react";
import chair from "../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";
const AppointmentBanner = ({ date, setDate }) => {
  let footer = date ? (
    <p>you have selected date: {format(date, "PP")}</p>
  ) : (
    <p>Please pick a date.</p>
  );

  return (
    <div class='hero min-h-screen '>
      <div class='hero-content flex-col lg:flex-row-reverse'>
        <img
          src={chair}
          class='max-w-sm rounded-lg shadow-2xl'
          alt='dentist chair'
        />
        <div>
          <DayPicker
            mode='single'
            selected={date}
            onSelect={setDate}
            footer={footer}
          />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
