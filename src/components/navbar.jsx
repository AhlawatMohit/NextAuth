import React from 'react'
import Link from 'next/link'
import { IoIosSearch } from "react-icons/io"
import { FiShoppingCart } from "react-icons/fi"
import { LiaGreaterThanSolid } from "react-icons/lia"
import { LiaLessThanSolid } from "react-icons/lia"



const navbar = () => {
    return (
        <header className="bg-white shadow h-24">
            <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className='flex flex-row-reverse pt-2 '>
                    <div className='text-xs text-[#333333] px-2'>Hi, John</div>
                    <div className='text-xs text-[#333333] px-2'>Order & Returns</div>
                    <div className='text-xs text-[#333333] px-2'>Help</div>
                </div>
                <div className="flex items-center justify-between h-16">

                    {/* NavBar Left Content */}
                    <div className='text-3xl font-bold text-[#000000]'>
                        ECOMMERCE
                    </div>

                    {/* NavBar Center Content */}
                    <div className='flex flex-row gap-4'>
                        <Link href='#'>
                            <span className='text-[#000000] font-semibold text-base'>Categories</span>
                        </Link>
                        <Link href='#'>
                            <span className='text-[#000000] font-semibold text-base'>Sale</span>
                        </Link>
                        <Link href='#'>
                            <span className='text-[#000000] font-semibold text-base'>Clearance</span>
                        </Link>
                        <Link href='#'>
                            <span className='text-[#000000] font-semibold text-base'>New Stock</span>
                        </Link>
                        <Link href='#'>
                            <span className='text-[#000000] font-semibold text-base'>Trending</span>
                        </Link>
                    </div>

                    <div className='text-[#000000]'>
                        <button className='size-12 scale-105'><IoIosSearch /></button>
                        <button className='size-12 scale-105'><FiShoppingCart /></button>
                    </div>
                   
                </div>

            </nav>
              {/* Discount Section  */}
              <div className='w-screen mt-2 bg-[#F4F4F4]'>
                    <div className='bg-[#F4F4F4] h-9 text-[#000000] flex justify-center items-center'>
                        <h1 className='text-sm flex flex-row gap-10 font-medium'>
                        <span className='pt-1'><LiaLessThanSolid /></span>
                        Get 10% off on business sign up 
                        <span className='pt-1'> <LiaGreaterThanSolid /></span>
                        </h1>
                    </div>
                    </div>
        </header>
    )
}

export default navbar