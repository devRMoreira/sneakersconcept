// components/BottomNavBar.js
import Link from 'next/link';
import React from 'react';
import { PiSneakerFill } from "react-icons/pi";
import { IoSearch } from "react-icons/io5";
import { MdShoppingCart } from "react-icons/md";




const NavBar = () => {
  return (
    <nav className="bg-red-500 p-4">
      
       
        <div className="flex items-center space-x-4">
          <a href="./home" className="text-black flex items-center">
          <PiSneakerFill  /> 
          </a>
          <a href="" className="text-whiteflex items-center">
            <IoSearch className="mr-2" /> 
          </a>
          <a href="" className="text- flex items-center">
            <MdShoppingCart className="mr-2" /> 
          </a>
          
        </div>
    
    </nav>
  );
};

export default NavBar;