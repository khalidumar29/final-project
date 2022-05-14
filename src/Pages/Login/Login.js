import React from "react";
import { FcGoogle } from "react-icons/fc";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init.js";
import { useForm } from "react-hook-form";
import Loading from "../Shared/Loading/Loading.js";
const Login = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, emailUser, emailLoading, EmailError] =
    useSignInWithEmailAndPassword(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };

  if (googleLoading || emailLoading) {
    return <Loading></Loading>;
  }

  if (googleUser || emailUser) {
    console.log(googleUser || emailUser);
  }
  let signInError;
  if (googleError || EmailError) {
    signInError = (
      <p className='text-red-500'>
        {googleError?.message || EmailError?.message}
      </p>
    );
  }
  return (
    <div className='flex h-screen justify-center items-center'>
      <div className='card w-96 bg-base-100 shadow-xl'>
        <div className='card-body'>
          <h2 className='text-center text-2xl font-bold'>Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
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
                <span className='label-text'>Password</span>
              </label>
              <input
                {...register("password", {
                  required: { value: true, message: "password is required" },
                  minLength: {
                    value: 6,
                    message: "must be 6 charcter or longer",
                  },
                })}
                type='password'
                placeholder='Your Password'
                className='input input-bordered w-full max-w-xs'
              />
              <label className='label'>
                {errors.password?.type === "required" && (
                  <>
                    <span className='label-text-alt text-red-500'>
                      {errors.password.message}
                    </span>
                  </>
                )}
                {errors.password?.type === "minLength" && (
                  <>
                    <span className='label-text-alt text-red-500'>
                      {errors.password.message}
                    </span>
                  </>
                )}
              </label>
            </div>
            {signInError}
            <input
              type='submit'
              className='btn btn-outline btn-accent w-full mt-3'
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
