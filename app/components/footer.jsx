import React from 'react'
import footer from '@/public/footer.svg'
import Image from 'next/image'
import Link from 'next/link'
import insta from '@/public/instagram.svg'
import twitter from '@/public/Twitter.svg'
import facebook from '@/public/facebook.svg'
import linkedin from '@/public/LinkedIn.svg'
import play from '@/public/playstore.svg'

export default function Footer() {
  return (
    <div className=' h-[70vh] bg-pri overflow-hidden  ' >
        <div className=' flex gap-[5%] items-center justify-center px-[12rem] py-[5rem] '>
            <div className='flex flex-col gap-[3vh]  '>
                <Image src={footer} alt=".."/>
                <p className=' text-[1.3vw] font-bold w- ' >Be Original, Buy Original <br/>    with Sense Original</p>
                <div className=' flex gap-[2%] ' >
                    <Image src={insta} alt='..'/>
                    <Image src={twitter} alt='..'/>
                    <Image src={facebook} alt='..'/>
                    <Image src={linkedin} alt='..'/>
                </div>
            </div>
            <div className='flex flex-col gap-[1.5vh]' >
                <h1 className='font-bold' >Get in touch</h1>
                <p>care@senseoriginal.com</p>
                <p>Start-up and Incubation Cell,<br/> Pranveer Singh Institute of Technology,<br/> Kanpur</p>
            </div>
            <div className='flex flex-col gap-[2vh] items-start justify-start '>
                <h1 className='font-bold' >Jump To</h1>
                <Link href="#">Home</Link>
                <Link href="#">About Us</Link>
                <Link href="#">Blog</Link>
                <Link href="#">Contact Us</Link>
            </div>
            <div className=' flex flex-col gap-[2vh] '>
                <h1 className='font-bold'>Legal</h1>
                <Link href="#" className='text-[.9vw] '>Terms of Use</Link>
                <Link href="#" className='text-[.9vw] ' >Privacy Policy</Link>
                <h1 className='font-bold w-[120%] '>Get The App </h1>
                <div className='flex gap-[1vh]'>
                    <Image src={play}/>
                    <Link href="#" className='w-[100%] text-[.9vw] hover:font-bold duration-300 ' >Play Store</Link>
                </div>
            </div>
        </div>
        <div className='h-[.1rem] w-full bg-quad'></div>
        <div className=' flex flex-col justify-center items-center text-center pt-[2rem] '>
            <p>© Senseoriginal Technologies Pvt Ltd 2023</p>
            <p>Sense Original is a technology company helping the world become a counterfeit free place.</p>
        </div>


    </div>
  )
}
