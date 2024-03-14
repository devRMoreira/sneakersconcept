import React from "react";
import Image from "next/image";
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";
import { useRouter } from "next/router";

const TopNavBar = () => {


  return (
    <div className="relative ">
      <div className="h-fit  flex items-center p-4   ">
        <Link href="/home" className="text-white ">
          <IoIosArrowBack size={22} />
        </Link>
        <div className=" w-full flex justify-center "> <Image src="/logobranco.png" height={60} width={60} /></div>
      </div>
    </div>
  );
}

export default React.memo(TopNavBar);
