import React from 'react'
import Image from 'next/image'
import cloud from '@/public/Character.svg'
import readproduct from '@/public/Character2.svg'
import tapproduct from '@/public/Illustration.svg'
import verified from '@/public/Illustration2.svg'

export default function Sec1() {
  return (
    <div className='h-[120vh] mb-[5%] flex flex-col items-center justify-center px-[12rem] gap-[15%] '>
        <div>
            <h1 className='text-[3vw] font-semibold pt-[8%] '>How Does It Work</h1>
        </div>
        <div className='flex gap-[4%]'>
            <div className='flex flex-col justify-center items-center mb-[1%]  '>
                <Image src={cloud} className=' '/>
                <h1 className='text-[1.4vw] font-medium '>Download app</h1>
                <p className='text-center text-[.9vw] w-[80%] font-medium mt-[5%] ' >Download our application from Play Store and Register on our application. </p>
            </div>
            <div className='flex flex-col justify-center items-center gap-[5%]'>
                <Image src={tapproduct}/>
                <h1 className='text-[1.4vw] font-medium text-center '>Tap on Product</h1>
                <p className='text-center text-[.9vw] font-medium w-[80%]' >Tap on a Sense Original Verified Product and check if it is authentic or not. </p>
            </div>
            <div className='flex flex-col justify-center items-center gap-[5%]'>
                <Image src={verified}/>
                <h1 className='text-[1.4vw] font-medium '>Read Product</h1>
                <p className='text-center text-[.9vw] font-medium w-[80%]' >Read about the product with the help of our application and verify it’s authenticity.</p>
            </div>
            <div className='flex flex-col justify-center items-center gap-[5%]'>
                <Image src={readproduct}/>
                <h1 className='text-[1.4vw] font-medium '>Sense Original Verified</h1>
                <p className='text-center text-[.9vw] font-medium w-[80%]' >If our application gives you a response hence your product is authentic. </p>
            </div>
        </div>
    </div>
  )
}
