import React from "react";
import cloudicon from "@/public/Cloudicon.svg";
import Link from "next/link";
import Image from "next/image";
export default function DownloadBtn() {
  return (
    <div>
      <Link href="#">
        <button className="w-[15rem] h-[4.3rem] rounded-full bg-[#1D191F] text-[white] flex justify-center items-center gap-3 ">
          <Image src={cloudicon} alt="icon" /> Download app
        </button>
      </Link>
    </div>
  );
}
