import React, { useEffect } from 'react'
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useAuth } from '../context/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const {authUser, setAuthUser} = useAuth();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
          const userInfo = {
            email: data.email, 
            password: data.password,
          };
      
          const response = await axios.post("/api/user/login", userInfo);
          console.log(response.data);
          if(response.data) {
            alert("User Logged in successfully");
          }
          localStorage.setItem("messenger", JSON.stringify(response.data));
          setAuthUser(response.data)
        } catch (error) {
            if(error.response)  {
                alert(error.response.data.msg)

            }
        }
      };
    useEffect(() => {
      if (authUser) {
        navigate("/"); // Redirect to home if user is logged in
      }
    }, [authUser, navigate]);
      
  return (
    <div className='flex flex-col h-screen items-center justify-center gap-3'>
        <h1 className='text-2xl font-bold'>Login</h1>
        <form className='flex flex-col gap-4 ' onSubmit={handleSubmit(onSubmit)}>
             {/* Email */}
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="text" className="grow" placeholder="Email" {...register("email", { required: true })}/>
          </label>
          {errors.email && <span>This field is required</span>}

          {/* Password */}
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input type="password" className="grow" placeholder="password" {...register("password", { required: true })} />
          </label>
          {errors.password && <span>This field is required</span>}
        <button className='bg-blue-500 cursor-pointer p-2 rounded-md w-full hover:bg-blue-300'> Login</button>
        <p className='text-xs'>Don't have an account?<Link to={"/signup"} className=' ml-2 text-blue-500 hover: underline cursor-pointer'>Sign Up!</Link></p>
        </form>
    </div>
  )
}

export default Login