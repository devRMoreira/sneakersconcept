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

import Image from 'next/image';
import Link from 'next/link';
import { Router } from 'next/router';
import { useState } from 'react';

export default function PedidoForm() {
  const [formData, setFormData] = useState({
    email: '',
    nome: '',
    idade: '',
    localidade: '',
    marca: '',
    modelo: '',
    cor: '',
    tamanho: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      email: '',
      nome: '',
      idade: '',
      localidade: '',
      marca: '',
      modelo: '',
      cor: '',
      tamanho: ''
    });
  };

  /*  if (!event) {
       return (
         <div>
           <div className="flex justify-center items-center h-screen ">
             <img
               src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/f9aea342094811.57c019c4f089a.gif"
               alt="Loading"
             />
           </div>
         </div>
       );
     } */

  return (
    <div className="container mx-auto p-4">
      {/* top bar com logo e search sneakers */}
      <Image
        src="https://i.imgur.com/gS9DHPu.jpeg"
        alt="background"
      /*       layout="fill"
            objectFit='cover' */
      />

      <Link href="/home">
        <p>Voltar para a página inicial</p>
      </Link>
      {/* navbar */}
    </div>
  );
}


