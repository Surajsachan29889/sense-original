import React from 'react'
import Image from 'next/image'
import DownloadBtn from './utils/download-btn'
import phone from '@/public/sec2phone.svg'
import phone2 from '@/public/sec3phone.svg'
import noti from '@/public/noti.svg'

export default function Sec2() {
  return (
    <div className='h-[200vh] flex flex-col items-center gap-[2%] px-[12rem] '>
        <p>AVAILABLE At GOOGLE PLAY STORE</p>
        <h1 className='text-[3vw] font-semibold text-center '>Built for the next generation <br/> of Authentication & Verification.</h1>
        <p className='w-[60%] text-center ' >Sense Original is an application that user can download, <br/>use it to verify is a product is authentic from the original company or not.</p>

        <div className=' h-[40%] bg-sec rounded-2xl mt-[10%] relative pl-[5%] flex flex-col justify-center gap-[5%] '>
            <h1 className=' w-[] text-[2.5vw] text-[white] '>Advanced Authentication <br/> Technology</h1>
            <p className=' w-[40%] text-[white] ' >Sense Original employs cutting-edge technology and robust encryption to provide unparalleled protection against counterfeiting, ensuring the authenticity of every product.</p>
            <DownloadBtn  />
            <div className='absolute w-[35%] h-[30%] noti border-[2px] right-[25%] top-[65%] z-10 border-[black] bg-tri rounded-xl p-[2rem]   ' >
                <p className='text-[.9vw] font-semibold  '>Tap the product for authentication and unlock the certainty of genuine quality with Sense Original's innovative verification technology.</p>
            </div>
            <Image src={phone} alt="phone" className='phone absolute right-12 top-[-15%] h-[130%]  ' />
        </div>
        <div className=' h-[40%] bg-[#FEF86B] rounded-2xl  relative pl-[55%] flex flex-col justify-center gap-[5%] mt-[20%] '>
            <h1 className=' w-[] text-[2.5vw]  '>Real-Time Verification</h1>
            <p className=' w-[90%]  ' >Experience instant verification with Sense Original. Our technology allows users to authenticate products in real-time, offering immediate assurance of their genuineness.</p>
            <DownloadBtn  />
           
            <Image src={noti} alt="phone" className='phone absolute right-[50%] z-20 top-[6%] h-[130%]  ' />
            <Image src={phone2} alt="phone" className='phone absolute left-12 top-[-15%] h-[130%]  ' />
        </div>
    </div>
  )
}
