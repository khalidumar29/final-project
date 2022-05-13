import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init.js";
import { useForm } from "react-hook-form";
const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  if (user) {
    console.log(user);
  }
  console.log(loading, error);
  return (
    <div className='flex h-screen justify-center items-center'>
      <div className='card w-96 bg-base-100 shadow-xl'>
        <div className='card-body'>
          <h2 className='text-center text-2xl font-bold'>Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("firstName", { required: true })} />
            {errors.firstName?.type === "required" && "First name is required"}

            <input {...register("lastName", { required: true })} />
            {errors.lastName && "Last name is required"}

            <input
              type='submit'
              className='btn btn-outline btn-accent w-full'
              value='LOGIN'
            />
          </form>
          <div className='divider'>OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className='btn btn-outline btn-primary uppercase'
          >
            <FcGoogle className='mr-2 text-xl' />
            continue with google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
