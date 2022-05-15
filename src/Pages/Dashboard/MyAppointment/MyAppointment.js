import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
const MyAppointment = () => {
  const [appointments, setAppointments] = useState([]);
  const [user] = useAuthState(auth);
  useEffect(() => {
    if (user) {
      fetch(
        `https://doctors-portal12.herokuapp.com/booking?patient=${user.email}`
      )
        .then((res) => res.json())
        .then((data) => setAppointments(data));
    }
  }, [user]);
  return (
    <div>
      <div className='flex items-center py-[15px] justify-between'>
        <h2 className='lg:text-[24px]  font-bold capitalize text-accent'>
          My Appointment
        </h2>
        <button className='btn btn-outline btn-accent'>MAY 10, 2022</button>
      </div>
      <div class='overflow-x-auto'>
        <table class='table w-full'>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>SERVICE </th>
              <th>Date</th>
              <th>TIME</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment._id}>
                <th>{appointments.indexOf(appointment) + 1}</th>
                <td>{appointment.patientName}</td>
                <td>{appointment.treatment}</td>
                <td>{appointment.date}</td>
                <td>{appointment.slot}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
