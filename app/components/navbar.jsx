import React from 'react'
import brandlogo from '@/public/brandlogo.svg'
import Image from 'next/image'
import Link from 'next/link'
export default function Navbar() {
  return (
    <div className='bg-pri h-[8rem] w-full flex gap-[10%] justify-center items-center  '>
        <div className='flex gap-[10%] items-center font-semibold text-[1.1rem] px-[12rem]  w-[80%] '>
        <Image 
            src={brandlogo}
            alt='brandlogo'
            className=' '
            
        />
        <div className='flex gap-[10%] items-center w-[50%]'>

        <Link href="#">Home</Link>
        <Link href="#">About Us</Link>
        <Link href="#">Blog</Link>
        </div>

        </div>
        <div className='w-[30%] '>
            <Link href="#"><button className='w-[11.0625rem] h-[4rem] bg-black text-[white] hover:font-semibold hover:w-[11.2rem] transition-all text-[1.1rem]   rounded-full  '>Contact Us</button></Link>
        
        </div>
    </div>
  )
}
