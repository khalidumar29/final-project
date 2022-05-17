import React from "react";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";

const ManageDoctor = () => {
  const { data: doctors, isLoading } = useQuery("doctors", () =>
    fetch("http://localhost:3100/doctor", {
      authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h1 className='text-2xl capitalize'>manage doctor: {doctors.length}</h1>
    </div>
  );
};

export default ManageDoctor;
