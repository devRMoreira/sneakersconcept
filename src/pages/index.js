import Image from "next/image";
import { Inter } from "next/font/google";
import Link from 'next/link';



const inter = Inter({ subsets: ["latin"] });

const sapatilhaExemplo = {
  _id: "65f1aea6e6a0e41cf6583939",
  marca: "Nike",
  modelo: "Court Vision Low Nn",
  foto: "https://i.imgur.com/pXcFq8m.png",
  preco: 39.99,
  quantidade: [
    {
      "tamanho": 38,
      "stock": 0
    },
    {
      tamanho: 39,
      "stock": 1
    },
    {
      tamanho: 40,
      stock: 15
    },
    {
      tamanho: 41,
      stock: 10
    }
  ]
}

export default function Home() {
  
    return (
      <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('/background.jpg')" }}>
        <div className="absolute inset-x-0 bottom-8 flex justify-center pb-0">
          <Link href="/home">
          <button className="bg-emerald-500 opacity-80 text-white font-bold py-4 text-lg px-20 rounded-full">
            Entrar
          </button>
          </Link>
        </div>
        <div className="absolute top-[100px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <img src="/logopreto.png" alt="logo" className="w-68 " />
      </div>
      </div>
    );
  }
  
