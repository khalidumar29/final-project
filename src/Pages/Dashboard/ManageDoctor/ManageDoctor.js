import React, { useState } from "react";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";

const ManageDoctor = () => {
  const [deleteDoctor, setDeleteDoctor] = useState(false);
  const {
    data: doctors,
    isLoading,
    refetch,
  } = useQuery("doctors", () =>
    fetch("https://doctors-portal12.herokuapp.com/doctor", {
      authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    }).then((res) => res.json())
  );

  const handleDelete = (email) => {
    if (deleteDoctor) {
      fetch(`https://doctors-portal12.herokuapp.com/doctor/${email}`, {
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
    }
  };

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h1 className='text-2xl capitalize'>manage doctor: {doctors.length}</h1>
      <div className='overflow-x-auto'>
        <div className='overflow-x-auto w-full'>
          <table className='table w-full'>
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
                    <div className='flex items-center space-x-3'>
                      <div className='avatar'>
                        <div className='w-16 rounded-full ring ring-[secondary]'>
                          <img src={doctor.img} alt='' />
                        </div>
                      </div>
                      <div>
                        <div className='font-bold'>{doctor.name}</div>
                        <div className='text-sm opacity-50'>{doctor.email}</div>
                      </div>
                    </div>
                  </td>
                  <td>{doctor.specialty}</td>
                  <th>
                    <label
                      onClick={() => {
                        handleDelete(doctor.email);
                      }}
                      htmlFor='my-modal-6'
                      className='btn btn-error btn-tiny btn-xs'
                    >
                      delete
                    </label>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <input type='checkbox' id='my-modal-6' className='modal-toggle' />
      <div className='modal modal-bottom sm:modal-middle'>
        <div className='modal-box'>
          <h3 className='font-bold text-lg'>Are You Sure...?</h3>
          <p className='py-4'>Delete this Doctor.</p>
          <div className='modal-action'>
            <label
              onClick={() => {
                setDeleteDoctor(true);
              }}
              htmlFor='my-modal-6'
              className='btn btn-error text-accent'
            >
              Confirm
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageDoctor;
