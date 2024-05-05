"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react"
import axios from "axios";
import { toast } from "react-hot-toast"
import { useRouter } from 'next/router'


export default function signupPage() {

  const router = useRouter();

  const [user, setUser] = useState({
    email: "",
    password: "",
    username: ""
  });

  const [buttonDisabled, setButtonDisabled] = useState(false);

  const [loading, setLoading] = useState(false);

  const onSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      console.log("Signup Success", response.data);
      toast.success("Signup Success");
      // router.push('/verifyemail');
      router.push('/login');

    } catch (error) {
      console.log("Signup Failed", error.message);
      toast.error("User Already Exist");
    }
    finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
      setButtonDisabled(false)
    } else {
      setButtonDisabled(true)
    }
  }, [user]);


  return (
    <div className='bg-white flex flex-col items-center justify-center h-screen mt-9'>
      <h1>{loading ? "Processing..." : ""}</h1>
      <div className='w-[360px] lg:w-[400px] xl:w-[576px] h-[600px] bg-white p-16 rounded-[20px] border-[1px] border-[#C1C1C1]'>
        <h1 className='text-3xl text-[#000000] font-semibold text-center'>Create your account</h1>
        <form className='mt-5'>
          <div className="mb-4">
            <label htmlFor="username" className="text-[#000000] text-base font-normal">Name</label>
            <input
              id="username"
              type='text'
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              placeholder="Name"
              className='w-full mt-2 border-2 border-[#C1C1C1] rounded-md p-2' />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="text-[#000000] font-normal text-base">Email</label>
            <input
              id="email"
              type='email'
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              placeholder='Email'
              className='w-full mt-2 border-2 border-[#C1C1C1] rounded-md p-2' />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="text-[#000000] font-normal text-base">Password</label>
            <input
              id="password"
              type='password'
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              placeholder='Password'
              className='w-full mt-2 border-2 border-[#C1C1C1] rounded-md p-2'
              autoComplete="on" />
          </div>
        </form>
        <button
          onClick={onSignup}
          className='w-full mt-2 bg-[#000000] text-[#FFFFFF] font-medium text-base py-2 rounded-md'>{
            buttonDisabled ? "No SignUp" : "CREATE ACCOUNT"}
        </button>

        {/* LOGIN LINK */}
        <p
          className='mt-2 text-[#333333] font-normal text-center pt-12'>
          Have an Account?
          <Link
            href='/login'
            className='text-[#000000] hover:text-[#000000] font-medium'>
            LOGIN
          </Link>
        </p>
      </div>
    </div>
  );
}
