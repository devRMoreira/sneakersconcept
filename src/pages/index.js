import Image from "next/image";
import { Inter } from "next/font/google";
import Link from 'next/link';


export default function Home() {

  return (
    <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('/backg.jpg')" }}>
      <div className="absolute inset-x-0 bottom-8 flex justify-center pb-7">
        <Link href="/home">
          <button className="bg-amber-950  opacity-70 text-white font-bold py-8 text-lg px-32 rounded-full">
            Entrar
          </button>
        </Link>
      </div>
      <div className="absolute top-[100px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        
      </div>
    </div>
  );
}

