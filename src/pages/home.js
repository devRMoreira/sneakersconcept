

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
      <p>HomePage</p>
      {/* navbar */}
    </div>
  );
}
