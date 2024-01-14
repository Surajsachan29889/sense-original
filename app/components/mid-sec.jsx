import React from "react";
import Image from "next/image";
import Link from "next/link";
import secure from '@/public/secure.svg'
import instant from '@/public/instant.svg'
import feefree from '@/public/fee-free.svg'
import simple from '@/public/simple.svg'

export default function MidSec() {
  return (
    <div className="h-[150vh] flex flex-col gap-[10%] justify-center items-center ">
      <div className="">
        <h1 className="text-[3vw] font-bold ">Features of Sense Original</h1>
        <p>
          Redefining authenticity with cutting-edge technology for a
          counterfeit-free future.
        </p>
      </div>
      <div className=" flex gap-[10%] ">
        <div className=" w-[600px] h-[283px] border-[1px] transition-all border-[grey] rounded-2xl pr-[3%] pl-[5%] pt-[4%] pb-[6%] flex flex-col gap-5 midcard  ">
            <div className=" flex gap-[5%] items-center ">
                <div className=" h-[8vh] w-[18%] flex justify-center items-center cardicon bg-[#FEF86B] rounded-lg ">
                    <Image src={secure} />
                </div>
                <h1 className=" text-[2vw] font-medium ">Secure</h1>
            </div>
            <p className=" text-[1vw] font-medium ">Sense Original Verifications are protected by the latest encryption and security technology. We have leveraged technology to keep the verification information safe.</p>
            <Link href="#">Learn more...</Link>
          
        </div>
        <div className=" w-[600px] h-[283px] border-[1px] transition-all border-[grey] rounded-2xl pr-[3%] pl-[5%] pt-[4%] pb-[6%] flex flex-col gap-5 midcard  ">
            <div className=" flex gap-[5%] items-center ">
                <div className=" h-[8vh] w-[18%] flex justify-center items-center cardicon bg-[#FEF86B] rounded-lg ">
                    <Image src={instant} />
                </div>
                <h1 className=" text-[2vw] font-medium ">Instant</h1>
            </div>
            <p className=" text-[1vw] font-medium ">Experience the speed of authenticity with Sense Original. Our instant verification process ensures your products are validated in the blink of an eye.</p>
            <Link href="#">Learn more...</Link>
          
        </div>
      </div>
      <div className=" flex gap-[10%] ">
      <div className=" w-[600px] h-[283px] border-[1px] transition-all border-[grey] rounded-2xl pr-[3%] pl-[5%] pt-[4%] pb-[6%] flex flex-col gap-5 midcard  ">
            <div className=" flex gap-[5%] items-center ">
                <div className=" h-[8vh] w-[18%] flex justify-center items-center cardicon bg-[#FEF86B] rounded-lg ">
                    <Image src={feefree} />
                </div>
                <h1 className=" text-[2vw] font-medium ">Fee-Free</h1>
            </div>
            <p className=" text-[1vw] font-medium ">With Sense Original, authenticity comes without a price tag. Our transparent approach means no hidden fees – just straightforward, cost-free brand protection.</p>
            <Link href="#">Learn more...</Link>
          
        </div>
        <div className=" w-[600px] h-[283px] border-[1px] transition-all border-[grey] rounded-2xl pr-[3%] pl-[5%] pt-[4%] pb-[6%] flex flex-col gap-5 midcard  ">
            <div className=" flex gap-[5%] items-center ">
                <div className=" h-[8vh] w-[18%] flex justify-center items-center cardicon bg-[#FEF86B] rounded-lg ">
                    <Image src={simple} />
                </div>
                <h1 className=" text-[2vw] font-medium ">Secure</h1>
            </div>
            <p className=" text-[1vw] font-medium ">Navigating brand protection is a breeze with Sense Original. Our user-friendly interface ensures simplicity in every step, making authenticity verification a seamless experience.</p>
            <Link href="#">Learn more...</Link>
          
        </div>
      </div>
    </div>
  );
}
