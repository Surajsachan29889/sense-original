import React from "react";
import Image from "next/image";
import connectform from "@/public/connectform.svg";
import Link from "next/link";

export default function ContactForm() {
  return (
    <div className="h-[130vh] w-full  ">
      <div className="h-[10vh]"></div>
      <form action="/" method="post">
        <div className="h-[120vh] bg-quad flex gap-[5rem]  py-[7rem] px-[12rem] ">
          <div className=" mt-[10%] ">
            <Image src={connectform} />
          </div>

          <div className="flex flex-col gap-[5%]">
            <h1 className=" text-[3vw] font-bold ">
              Connect With Our Sales Team.
            </h1>
            <p className="  ">
              Our sales team always active to support you. Any kind of questions
              about to our product they can answer to you.
            </p>

            <div className="flex gap-[3%] justify-start ">
              <input
                type="text"
                name="firstname"
                className=" w-[50%] h-[3rem] border-[black] border-[1px] rounded-lg bg-transparent placeholder:font-medium placeholder:text-[black] pl-[5%] "
                placeholder="First Name"
              />
              <input
                type="text"
                name="lastname"
                className=" w-[50%] h-[3rem] border-[black] border-[1px] rounded-lg bg-transparent placeholder:font-medium placeholder:text-[black] pl-[5%] "
                placeholder="Last Name"
              />
            </div>
            <div className="flex gap-[3%] justify-start ">
              <input
                type="email"
                name="email"
                className=" w-[50%] h-[3rem] border-[black] border-[1px] rounded-lg bg-transparent placeholder:font-medium placeholder:text-[black] pl-[5%] "
                placeholder="E-mail"
              />
              <input
                type="tel"
                name="phonenumber"
                className=" w-[50%] h-[3rem] border-[black] border-[1px] rounded-lg bg-transparent placeholder:font-medium placeholder:text-[black] pl-[5%] "
                placeholder="Phone Number"
              />
            </div>
            <div className=" ">
              <input
                type="text-area"
                name="textarea"
                className=" w-[100%] h-[6rem] border-[black] border-[1px] rounded-lg bg-transparent placeholder:font-medium placeholder:text-[black] pl-[5%] "
                placeholder="Your Text"
              />
            </div>
            <div className=" flex  gap-5">
              <input
                type="checkbox"
                name="agreement"
                className=" border-[black] w-[1.4rem] h-[1.4rem] border-[1px] rounded-lg bg-transparent checked:bg-transparent indeterminate:bg-gray-300"
                placeholder="Your Text"
              />
              <span>
                I agree that braintree may contact me at the email address or
                phone number above.
              </span>
            </div>
            <Link href="#">
              <button
                type="submit"
                className="w-[100%] border-[black] border-[1px] rounded-lg h-[3rem] bg-[#E5E4C2] "
              >
                Submit
              </button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
