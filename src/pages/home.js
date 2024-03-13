import Navbar from '@/frontend/components/navbar';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  return (
    <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('/backg2.jpg')" }}>
      <div className="absolute top-0 left-0 right-0 flex flex-col items-center justify-center h-full">
        <img src="/logobranco.png" alt="logo" className="w-60 h-auto" /> 
        <p className="text-white text-xl font-bold">Sneakers Team</p>
        
        <div className="bg-stone-700 w-[300px] rounded-lg p-4 mt-8 ">
          <p className="text-white text-lg font-bold mb-4">Saldos</p>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-lg overflow-hidden">
              <img src="/sneaker1.jpg" className="w-full" alt="Sneaker 1" />
            </div>
            <div className="bg-white rounded-lg overflow-hidden">
              <img src="/sneaker2.jpg" className="w-full" alt="Sneaker 2" />
            </div>
          </div>
        </div>
                
      </div>
      
    </div>
  );
}
