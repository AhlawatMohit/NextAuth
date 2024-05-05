"use client"
import React, { useState } from 'react';
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/router'
import axios from 'axios';

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

const interests = [
  'Shoes',
  'Men T-shirts',
  'Makeup',
  'Jewellery',
  'Women T-shirts',
  'Furniture',
];

export default function homePage() {

  const router = useRouter();

  const logout =  async () => {
    try {
      await axios.get('/api/users/logout')
      toast.success('Logout successful!')
      router.push('/login')
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  }

  const [ savedInterests, setSavedInterests ] = useState([]);

  const handleInterestChange = (interests) => {
    if(savedInterests.includes(interests)) {
      setSavedInterests(savedInterests.filter((item) => item !== interests));
    }
    else {
      setSavedInterests([...savedInterests, interests]);
    }
  };

  return (
    <div className='bg-white flex flex-col items-center justify-center h-screen mt-9'>
<div className='w-[360px] lg:w-[400px] xl:w-[576px] h-[600px] bg-white p-16 rounded-[20px] border-[1px] border-[#C1C1C1]'>
      <h1 className='text-3xl text-[#000000] font-semibold text-center'>Please mark your interests!</h1>
      <p className='text-[#000000] font-normal text-center py-6'>We will keep you notified.</p>
      <h3 className='text-2xl text-[#000000] font-medium'>My saved interests!</h3>
      <ul className="list-disc list-inside mt-2">
          {interests.map((interest) => (
            <li key={interest} className="flex items-center py-2">
              <button
                className={`mr-2 w-5 h-5 border border-[#FFFFFF] rounded flex items-center justify-center ${
                  savedInterests.includes(interest) ? 'bg-[#000000] text-white' : 'bg-[#CCCCCC] text-[#FFFFFF]'
                }`}
                onClick={() => handleInterestChange(interest)}
              >
                {savedInterests.includes(interest) ? '\u2713' : ''}
              </button>
              <span className={savedInterests.includes(interest) ? 'text-[#000000]' : 'text-[#000000]'}>{interest}</span>
            </li>
          ))}
        </ul>
        <Pagination className={'flex justify-center mt-10'}>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>

      </div>
      <button onClick={logout}
        className="bg-[#f8fafc] hover:bg-[#e5e7eb] mt-4 text-[#030712] font-bold py-2 px-4 rounded border-2">Log Out</button>
    </div>
  )
}
