import Link from 'next/link'
import React from 'react'
import DownloadBtn from './utils/download-btn'
import Image from 'next/image'
import customer from '@/public/customer.svg'
import achievement from '@/public/achievement.svg'

export default function Hero() {
  return (
    <div className='h-[110vh] w-full bg-pri px-[12rem] pt-[5%] flex flex-col gap-[10%] '>
        <div className='w-[60%] flex flex-col gap-9 '>

        <h1 className=' text-[3.5vw] font-bold  '> Easy way to detect authentic from <br/> counterfeit products.</h1>
        <p className=' w-[90%] ' >We are, tech providers for both brands and customers, who will ensure authenticity, help fight counterfeits, and nurture trust between brands and customers enhancing product experience.</p>
        </div>
        <DownloadBtn/>
        
        <div className='flex gap-[8%]'>
            <div className=' flex gap-2 items-center border-r-[2px] border-[black] w-[25%] '>
                <Image src={achievement} alt='icon' />
                <p>Enhancing <br/> Customer Experience</p> 
            </div>
            <div className='flex gap-2 items-center'>
                <Image src={customer} alt=".."/>
                <p>Revolutionary <br/> Technology</p>
            </div>
        </div>

    </div>
  )
}
