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
            tamanho: '',
            tipo: ''
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
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <label className="block mb-2">
                    Email:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} /* required */ className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                </label>
                <label className="block mb-2">
                    Nome:
                    <input type="text" name="nome" value={formData.nome} onChange={handleChange} placeholder="Opcional" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                </label>
                <label className="block mb-2">
                    Idade:
                    <input type="number" name="idade" value={formData.idade} onChange={handleChange} placeholder="Opcional" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                </label>
                <label className="block mb-2">
                    Localidade:
                    <input type="text" name="localidade" value={formData.localidade} onChange={handleChange} placeholder="Opcional" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                </label>
                <label className="block mb-2">
                    Marca:
                    <input type="text" name="marca" value={formData.marca} onChange={handleChange} placeholder="Opcional" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                </label>
                <label className="block mb-2">
                    Modelo:
                    <input type="text" name="modelo" value={formData.modelo} onChange={handleChange} placeholder="Opcional" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                </label>
                <label className="block mb-2">
                    Cor:
                    <input type="text" name="cor" value={formData.cor} onChange={handleChange} placeholder="Opcional" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                </label>
                <label className="block mb-2">
                    Tamanho:
                    <input type="number" name="tamanho" value={formData.tamanho} onChange={handleChange} placeholder="Opcional" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                </label>
                <label className="block mb-2">
                    Tipo:
                    <input
                        type="text"
                        name="tipo"
                        value={formData.tipo}
                        onChange={handleChange}
                        placeholder="Opcional"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                </label>

                <button type="submit" className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Enviar Pedido</button>
            </form>
            <Link href="/home">
                <p>Voltar para a página inicial</p>
            </Link>
            {/* navbar */}
        </div>
    );
}
