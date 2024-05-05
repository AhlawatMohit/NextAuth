"use client";
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import axios from 'axios'
import { useRouter } from 'next/router';


export default function LoginPage() {

  const router = useRouter();

  const [ user, setUser ] = useState({
    email: "",
    password: ""
  });

  const [ buttonDisabled, setButtonDisabled ] = useState(false);
  const [ loading, setLoading ] = useState(false);

  const onLogin = async () => {

    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      console.log("Login Success", response.data);
      toast.success("Login Success");
      router.push("/home");
      
    } catch (error) {
      console.log("Login Failed", error.message);
      toast.error("Invalid Credentials");
    }
    finally{
      setLoading(false);
    }

  }

  useEffect(() => {

    if(user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }

  return (
    <div className='bg-white flex flex-col items-center justify-center h-screen mt-9'>
    <h1>{loading ? "Processing...." : "Login"}</h1>
      <div className='w-[360px] lg:w-[400px] xl:w-[576px] h-[600px] bg-white p-16 rounded-[20px] border-[1px] border-[#C1C1C1]'>
        <h1 className='text-3xl text-[#000000] font-semibold text-center mb-8'>Login</h1>
        <p className='text-[#000000] text-2xl leading-7 font-medium text-center my-4'>Welcome back to ECOMMERCE</p>
        <p className='text-[#000000] text-base leading-5 font-normal text-center my-4'>The next gen business marketplace</p>
        <form className='mt-5'>
          <div className="mb-2">
            <label htmlFor='email' className="text-[#000000] font-normal text-base">Email</label>
            <input 
            id='email' 
            type='email' 
            value={user.email}
            onChange={(e) => setUser({...user, email: e.target.value})}
            placeholder='Email' 
            className='w-full mt-2 border-2 border-[#C1C1C1] rounded-md p-2' />
          </div>
          <div className="mb-2">
            <label htmlFor='password' className="text-[#000000] font-normal text-base">Password</label>
            <div className="relative mt-1">
              <input id='password' value={user.password} onChange={(e) => setUser({...user, password: e.target.value})} type={showPassword ? 'text' : 'password'} placeholder='Password' className='w-full mt-2 border-2 border-[#C1C1C1] rounded-md p-2 pr-24' autoComplete='on'
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 pr-4 py-[18px] underline decoration-1 text-[#000000] font-normal text-base duration-200"
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>
        </form>
        <button onClick={onLogin} className='w-full mt-2 bg-[#000000] text-[#FFFFFF] font-medium py-2 rounded-md'>{ buttonDisabled ? "No Login" : "LOGIN" }</button>

        <hr className='border-gray-300 w-full h-px my-6 bg-[#C1C1C1]' />
        <p className='mt-2 text-[#333333] font-normal text-center'>Don't have an Account? <a href='/' className='text-[#000000] hover:text-[#000000] font-medium'>SIGN UP</a></p>
      </div>
    </div>
  )
}
