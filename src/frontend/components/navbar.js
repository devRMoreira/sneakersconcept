import { PiSneakerFill } from "react-icons/pi";
import { IoSearch } from "react-icons/io5";
import { MdShoppingCart } from "react-icons/md";
import React from "react";

const BottomNavBar = () => {
  return (
    <div className="relative ">
      <div style={{ position: "fixed", bottom: 0 }} className=" bg-white flex items-center p-4 w-full border-t">
        <div className="grid grid-cols-3  place-content-around">
          <a href="/home" className="text-black ">
            <PiSneakerFill />
          </a>
          <a href="#" className="text-black ">
            <IoSearch className="mr-2" />
          </a>
          <a href="#" className="text-black ">
            <MdShoppingCart className="mr-2" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default React.memo(BottomNavBar);
