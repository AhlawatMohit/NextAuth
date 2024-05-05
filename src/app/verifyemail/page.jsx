'use client'
import Link from 'next/link'
import React from 'react'

export default function verifyEmail() {

  return (

    <div className="bg-white flex flex-col items-center justify-center h-screen mt-9">
      <div className='w-[360px] lg:w-[400px] xl:w-[576px] h-[400px] bg-white p-16 rounded-[20px] border-[1px] border-[#C1C1C1]'>
        <h2 className="text-[#000000] text-lg font-semibold mb-4 text-center">Verify your email</h2>
        <p className="text-gray-600 mb-6 text-center">
          Enter the 8 digit code you have received on <span className="font-semibold">userEmail**gmail.com</span>
        </p>
        <h3 className='text-[#000000] text-base font-normal mr-[21rem] text-center'>Code</h3>
        <div className="flex justify-center mb-6">
          <div className="grid grid-cols-8 xl:gap-2 gap-8">
            {Array.from({ length: 8 }, (_, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                className="xl:w-10 xl:h-10 w-7 h-7 text-center text-lg rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ))}
          </div>
        </div>
        <Link href={'/login'}>
          <button className="w-full bg-[#000000] text-white py-2 rounded border border-[#000000] hover:bg-[#343232] transition-colors text-center">
            VERIFY
          </button>
        </Link>
      </div>
    </div>
  )
}

