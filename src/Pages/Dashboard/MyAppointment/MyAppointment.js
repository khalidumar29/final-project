import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
const MyAppointment = () => {
  const [appointments, setAppointments] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      fetch(
        `https://doctors-portal12.herokuapp.com/booking?patient=${user.email}`,
        {
          method: "GET",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
        .then((res) => {
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            navigate("/");
          }
          return res.json();
        })
        .then((data) => {
          setAppointments(data);
        });
    }
  }, [user, navigate]);
  return (
    <div>
      <div className='flex items-center py-[15px] justify-between'>
        <h2 className='lg:text-[24px]  font-bold capitalize text-accent'>
          My Appointment
        </h2>
        <button className='btn btn-outline btn-accent'>MAY 10, 2022</button>
      </div>
      <div className='overflow-x-auto'>
        <table className='table w-full'>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>SERVICE </th>
              <th>Date</th>
              <th>TIME</th>
              <th>Payment</th>
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
                <td>
                  {appointment.price && !appointment.paid && (
                    <Link
                      className='btn btn-xs btn-success'
                      to={`/dashboard/payment/${appointment._id}`}
                    >
                      PAY
                    </Link>
                  )}
                  {appointment.price && appointment.paid && (
                    <div>
                      <p>
                        <span className='btn btn-xs btn-success'>PAID</span>
                      </p>
                      <p>
                        Transaction id:{" "}
                        <span className='text-success'>
                          {appointment.trxid}
                        </span>
                      </p>
                    </div>
                  )}
                </td>
              </tr>
            ))}
            {/* push on azure */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
