import Navbar from '@/frontend/components/navbar';
import Link from 'next/link';
import { useState } from 'react';
import { Inter } from "next/font/google";

export default function Home() {
  return (
    <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('/backg2.jpg')" }}>
      <div className="absolute top-0 left-0 right-0 flex flex-col  items-center justify-center h-full">
        <img src="/logobranco.png" alt="logo" className="w-60 h-auto" /> 
        <p className="text-white text-xl font-bold">Sneakers Team</p> 
        <div>
          <img src="/peeps.png" className='w-60'/>
        </div>
      </div>
      <div className="flex justify-center">
        <Navbar/>
      </div>
    </div>
  );
}
