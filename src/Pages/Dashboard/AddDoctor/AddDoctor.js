import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";

const AddDoctor = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const { data: services, isLoading } = useQuery("services", () =>
    fetch(`http://localhost:3100/service`).then((res) => res.json())
  );

  const imageStoreKey = "84088c7c84d98a60bbbf37c7c0854136";

  const onSubmit = async (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStoreKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            img: img,
          };
          // send to your database
          fetch("http://localhost:3100/doctor", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                toast.success("Doctor added successfully");
                reset();
              } else {
                toast.error("Failed to add the doctor");
              }
            });
        }
      });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h1 className='text-2xl capitalize'>Add a new doctor</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text'>Name</span>
          </label>
          <input
            {...register("name", {
              required: { value: true, message: "name is required" },
            })}
            type='text'
            placeholder='Your Name'
            className='input input-bordered w-full max-w-xs'
          />
          <label className='label'>
            {errors.name?.type === "required" && (
              <>
                <span className='label-text-alt text-red-500'>
                  {errors.name.message}
                </span>
              </>
            )}
          </label>
        </div>

        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text'>Email</span>
          </label>
          <input
            {...register("email", {
              required: { value: true, message: "email is required" },
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "provid a valid email",
              },
            })}
            type='email'
            placeholder='Your Email'
            className='input input-bordered w-full max-w-xs'
          />
          <label className='label'>
            {errors.email?.type === "required" && (
              <>
                <span className='label-text-alt text-red-500'>
                  {errors.email.message}
                </span>
              </>
            )}
            {errors.email?.type === "pattern" && (
              <>
                <span className='label-text-alt text-red-500'>
                  {errors.email.message}
                </span>
              </>
            )}
          </label>
        </div>

        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text'>Specialty</span>
          </label>
          <select
            {...register("specialty")}
            className='select select-bordered w-full max-w-xs'
          >
            {services.map((service) => (
              <option key={service._id} value={service.name}>
                {service.name}
              </option>
            ))}
          </select>
        </div>

        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text'>Photo</span>
          </label>
          <input
            {...register("image", {
              required: { value: true, message: "please upload an image" },
            })}
            type='file'
            placeholder='Your Photo'
            className='input input-bordered w-full max-w-xs'
          />
          <label className='label'>
            {errors.image?.type === "required" && (
              <>
                <span className='label-text-alt text-red-500'>
                  {errors.image.message}
                </span>
              </>
            )}
          </label>
        </div>

        <input
          type='submit'
          className='btn btn-outline btn-accent w-full mt-3 max-w-xs'
          value='Add'
        />
      </form>
    </div>
  );
};

export default AddDoctor;
