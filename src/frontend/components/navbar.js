import { PiSneakerFill } from "react-icons/pi";
import { IoSearch } from "react-icons/io5";
import { MdShoppingCart } from "react-icons/md";
import React from "react";
import Link from "next/link";

const BottomNavBar = () => {
  return (
    <div className="relative ">
      <div style={{ position: "fixed", bottom: 0 }} className=" bg-white flex items-center p-4 w-full border-t px-10 justify-between">
        <Link href="/home" className="text-black ">
          <PiSneakerFill size={23} />
        </Link>
        <Link href="/pesquisa" className="text-black ">
          <IoSearch size={23} />
        </Link>
        <a href="" className="text-black ">
          <MdShoppingCart size={23} />
        </a>
      </div>
    </div>
  );
}

export default React.memo(BottomNavBar);
