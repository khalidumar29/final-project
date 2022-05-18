import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";

const Payment = () => {
  const { id } = useParams();
  const url = `http://localhost:3100/booking/${id}`;
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
      <div class='card w-50 max-w-md bg-base-100 shadow-xl my-12'>
        <div class='card-body'>
          <p className='text-success'>{appointment.patientName}</p>
          <h2 class='card-title'>{appointment.treatment}</h2>
          <p className='capitalize'>
            your appointment:{" "}
            <span className='text-[orange]'>{appointment.date}</span> at{" "}
            <span className='text-success'>{appointment.slot}</span>
          </p>
          <p>Please Pay: ${appointment.price}</p>
          <div class='card-actions justify-end'>
            <button class='btn btn-primary'>Buy Now</button>
          </div>
        </div>
      </div>
      <div class='card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100'>
        <div class='card-body'></div>
      </div>
    </div>
  );
};

export default Payment;
