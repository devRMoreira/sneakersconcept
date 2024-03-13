
import Link from 'next/link';
import { useState } from 'react';
import BottomNavBar from '@/frontend/components/navbar';

export default function Home() {
  return (
    <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('/backg2.jpg')" }}>
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
        <img src="/logobranco.png" alt="logo" className="w-68" />
      </div>

      <div className="flex justify-center">
        <BottomNavBar />
      </div>
    </div>
  );
}
