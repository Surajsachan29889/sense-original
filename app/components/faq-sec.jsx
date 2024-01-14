'use client';

import React,{useState} from "react";
import Image from "next/image";
import faq from "@/public/faq.svg";
import expand from "@/public/expand.svg";

export default function FaqSec() {
    const [expandd, setExpandd] = useState(false);
  const faqobj= [
    {
      ques: "What is Sense Original?",
      desc: "We provide innovative solutions to empower brands in their fight against counterfeit products.",
    },
    {
      ques: "How does Sense Original work?",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, corporis nihil omnis ad vitae numquam mollitia eius laborum accusamus nobis!",
    },
    {
      ques: "Why is brand protection important?",
      desc: "Lorem Ipsum has been the industry's standard from dummy text ever since the unknown printer to galley of type and make a type specimen book.",
    },
    {
      ques: "What are the consequences of counterfeit products?",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, corporis nihil omnis ad vitae numquam mollitia eius laborum accusamus nobis!",
    },
    {
      ques: "How can Sense Original help my brand?",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, corporis nihil omnis ad vitae numquam mollitia eius laborum accusamus nobis!",
    },
];
const handleClick = (index) => {
    setExpandd(expandd === index ? null : index);
}
  return (
    <div className="h-[130vh] flex px-[12rem] py-[10%] ">
      <div className="w-[70%] flex flex-col gap-[5%] ">
        <h1 className="text-[2.8vw] font-bold ">
          Frequently Answered Questions
        </h1>
        <div className="flex flex-col gap-[1.5rem] ">
            {faqobj.map((item, index)=>{
                return(
                    
                    <div key={index} className={ expandd == index? ' relative h-[10rem] duration-[500ms]  w-[90%] rounded-lg border-[#c7c7c7] border-[2px] px-[2rem] py-[1rem] flex justify-center' :' transition-all w-[90%] h-[5rem] rounded-lg border-[#c7c7c7] border-[2px] px-[2rem] py-[1rem] flex justify-center'} >
                        <h1 key={index} className={expandd == index ? "text-[black] col-span-1 text-[1.1vw] font-extrabold w-[100%]":'text-[black] col-span-1 text-[1.1vw] font-semibold w-[100%]' }>{item.ques}</h1>
                        <p className={expandd == index ? "absolute bottom-5 left-[2rem] w-[50%] duration-[3000ms] opacity-100   ": " opacity-0 absolute bottom-5 left-[2rem] "  }>{item.desc}</p>
                        <button onClick={()=>handleClick(index)} >
                        <Image src={expand} alt=".." className={expandd == index?"rotate-90 duration-[500ms]":""} />
                        </button>

                    </div>
                )

            })}
        </div>
      </div>
      <div className="pt-[15%] w-[30%] ">
        <Image src={faq} alt=".." />
      </div>
    </div>
  );
}
