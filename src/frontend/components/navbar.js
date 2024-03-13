// components/BottomNavBar.js
import Link from 'next/link';
import React from 'react';
import { PiSneakerFill } from "react-icons/pi";
import { IoSearch } from "react-icons/io5";
import { MdShoppingCart } from "react-icons/md";




const NavBar = () => {
  return (
    <nav className="">
      
       
        <div className="absolute pt-30 ml-10 flex gap-4 pt-10">
          <a href="./home" className="text-black flex items-center gap-4">
          <PiSneakerFill  /> 
          </a>
          <a href="" className="flex items-center space-x-4 gap-4">
            <IoSearch className="mr-2" /> 
          </a>
          <a href="" className="flex items-center space-x-4 gap-4">
            <MdShoppingCart className="mr-2 " /> 
          </a>
          
        </div>
    
    </nav>
  );
};

export default NavBar;