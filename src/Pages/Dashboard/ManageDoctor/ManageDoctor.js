import React from "react";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";

const ManageDoctor = () => {
  const {
    data: doctors,
    isLoading,
    refetch,
  } = useQuery("doctors", () =>
    fetch("http://localhost:3100/doctor", {
      authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    }).then((res) => res.json())
  );

  const handleDelete = (email) => {
    fetch(`http://localhost:3100/doctor/${email}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.success(`${email} deleted`, { id: 1 });
          refetch();
        }
      });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h1 className='text-2xl capitalize'>manage doctor: {doctors.length}</h1>
      <div class='overflow-x-auto'>
        <div class='overflow-x-auto w-full'>
          <table class='table w-full'>
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Specilty</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {doctors.map((doctor, index) => (
                <tr key={doctor._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div class='flex items-center space-x-3'>
                      <div class='avatar'>
                        <div class='w-16 rounded-full ring ring-[secondary]'>
                          <img src={doctor.img} alt='' />
                        </div>
                      </div>
                      <div>
                        <div class='font-bold'>{doctor.name}</div>
                        <div class='text-sm opacity-50'>{doctor.email}</div>
                      </div>
                    </div>
                  </td>
                  <td>{doctor.specialty}</td>
                  <th>
                    <button
                      onClick={() => {
                        handleDelete(doctor.email);
                      }}
                      class='btn btn-error btn-tiny btn-xs'
                    >
                      delete
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageDoctor;
