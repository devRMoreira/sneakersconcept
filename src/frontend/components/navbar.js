import { PiSneakerFill } from "react-icons/pi";
import { IoSearch } from "react-icons/io5";
import { MdShoppingCart } from "react-icons/md";
import React from "react";

const BottomNavBar = () => {
  return (
    <div className="relative ">
      <div style={{ position: "fixed", bottom: 0 }} className=" bg-white flex items-center p-4 w-full border-t px-10 justify-between">
        {/* <div className="grid grid-cols-3  place-content-around pl-5"> */}
          <a href="/home" className="text-black ">
            <PiSneakerFill size={23}/>
          </a>
          <a href="#" className="text-black ">
            <IoSearch size={23}/>
          </a>
          <a href="#" className="text-black ">
            <MdShoppingCart size={23} />
          </a>
        {/* </div> */}
      </div>
    </div>
  );
}

export default React.memo(BottomNavBar);
