import BottomNavBar from '@/frontend/components/navbar';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';



const shoes = [
  {
    _id: "65f1aea6e6a0e41cf6583939",
    marca: "Nike",
    modelo: "Air Force Floral",
    foto: "https://i.imgur.com/wk8iuAH.png",
    preco: 39.99,
    quantidade: [
      { tamanho: 38, stock: 0 },
      { tamanho: 39, stock: 1 },
      { tamanho: 40, stock: 15 },
      { tamanho: 41, stock: 10 },
    ],
  },
  // Add
  {
    _id: "65f1aea6e6a0e41cf6583939",
    marca: "Nike",
    modelo: "Air Force Paint",
    foto: "https://i.imgur.com/36vzq5s.png",
    preco: 39.99,
    quantidade: [
      { tamanho: 38, stock: 0 },
      { tamanho: 39, stock: 1 },
      { tamanho: 40, stock: 15 },
      { tamanho: 41, stock: 10 },
    ],
  },
  {
    _id: "65f1aea6e6a0e41cf6583939",
    marca: "Nike",
    modelo: "Air Force Snoopy",
    foto: "https://i.imgur.com/6G2a2c1.png",
    preco: 39.99,
    quantidade: [
      { tamanho: 38, stock: 0 },
      { tamanho: 39, stock: 1 },
      { tamanho: 40, stock: 15 },
      { tamanho: 41, stock: 10 },
    ],
  },
  // Add
  {
    _id: "65f1aea6e6a0e41cf6583939",
    marca: "Nike",
    modelo: "Air Force Seleção CR7",
    foto: "https://i.imgur.com/Cpjc6jQ.pngg",
    preco: 39.99,
    quantidade: [
      { tamanho: 38, stock: 0 },
      { tamanho: 39, stock: 1 },
      { tamanho: 40, stock: 15 },
      { tamanho: 41, stock: 10 },
    ],
  },
];


export default function Costumiza() {
  return (
    <>
      <div className="inset-0 overflow-hidden bg-cover bg-center z-0 fixed" style={{ backgroundImage: "url('/backg2.jpg')" }} />
      <div className="relative inset-0 flex flex-col items-center justify-center h-full bg-transparent">

        <div className="container mx-auto p-4 text-white">
          <h1 className="text-5xl font-bold text-center pb-4">Costumiza os teus sneakers!</h1>
          <div className="w-full">
            <Image src="https://i.imgur.com/gS9DHPu.jpeg" alt="background" width={400} height={200} className="mx-auto rounded-xl" />
          </div>

          <h2 className="text-3xl font-bold mt-4 text-center">As nossas sapatilhas costumizadas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 justify-center mt-4">
            {shoes.map((shoe) => (
              <div key={shoe._id} className="border p-4 rounded-lg">
                <Image
                  src={shoe.foto}
                  alt={`${shoe.marca} ${shoe.modelo}`}
                  width={300}
                  height={200}
                  placeholder="empty"
                  className="mx-auto rounded-xl"
                />
                <p className="text-lg text-center">{`${shoe.marca} ${shoe.modelo}`}</p>
                <p className="text-lg text-center">{`Preço: ${shoe.preco}€`}</p>
                <div className="flex items-center justify-center">
                  <button onClick={() => alert('O seu produto foi adicionado')} className="block mr-2">Adicionar ao Carrinho</button>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2zm0 0v4m0 0h14m-14 0l3 6h8l3-6m-11 5h6" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          
        </div>
      </div>
    </>
  );
}