import { PiSneakerFill } from "react-icons/pi";
import { IoSearch } from "react-icons/io5";
import { MdShoppingCart } from "react-icons/md";
import React from "react";
import Image from "next/image";
import { IoIosArrowBack } from "react-icons/io";

const TopNavBar = () => {
  return (
    <div className="relative ">
      <div className="h-fit  flex items-center p-4   ">
        {/* <div className="grid grid-cols-3  place-content-around pl-5"> */}
          <a href="/home" className="text-white ">
            <IoIosArrowBack size={22}/>
          </a>
         <div className=" w-full flex justify-center "> <Image src="/logobranco.png" height={60} width={60}/></div>
        {/* </div> */}
      </div>
    </div>
  );
}

export default React.memo(TopNavBar);
