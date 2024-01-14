import React from 'react'
import support from '@/public/support.svg'
import Image from 'next/image'
import Link from 'next/link'
export default function SupportSec() {
  return (
    <div className='h-[100vh] flex justify-center items-center bg-quad px-[12rem] '>
        <div className='flex flex-col gap-[5vh] '>
            <h1 className='text-[3vw] font-bold w-[70%] '>
            Customer support is available 24/7
            </h1>
            <p className='w-[80%] '>
            Customers satisfations is our main goal. We give our best for our cutomers and always try to make our clients happy. 
            </p>
            <Link href="#"><button className='w-[9rem] bg-[#E5E4C2] h-[3.5rem] border-[black] border-[2px] rounded-full '>Contact Us</button></Link>
        </div>
        <div>
            <Image src={support}/>
        </div>
    </div>
  )
}
