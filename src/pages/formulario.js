import Link from 'next/link';
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
        tamanho: '',
        tipo: ''
    });

    const [showInputs, setShowInputs] = useState(true);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleToggleInputs = () => {
        setShowInputs(!showInputs);
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

    return (
        <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('/backg2.jpg')" }}>
            <div className="container mx-auto p-4 pt">
                <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col justify-end">
                    <div>
                        <h1 className="block mb-2 text-xl font-bold text-white mx-auto text-center rounded-xl">Tens um modelo específico de sapatilhas em mente? Diz-nos qual é!</h1>
                        <div onClick={handleToggleInputs}>
                            <button className="bg-amber-950  w-full opacity-80 text-white font-bold py-2 text-lg mt-3 rounded-full">Não sabes o que queres?</button>
                        </div>
                    </div>
                    {showInputs && (
                        <div className='bg-white text-blue rounded-xl mt-4 p-10'>
                            <label className="block mb-4 text bl">
                                Email:
                                <input type="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 block w-full  border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black" />
                            </label>
                            <label className="block mb-4">
                                Nome:
                                <input type="text" name="nome" value={formData.nome} onChange={handleChange} placeholder="Opcional" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black" />
                            </label>
                            <label className="block mb-4">
                                Idade:
                                <input type="number" name="idade" value={formData.idade} onChange={handleChange} placeholder="Opcional" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black" />
                            </label>
                            <label className="block mb-4">
                                Localidade:
                                <input type="text" name="localidade" value={formData.localidade} onChange={handleChange} placeholder="Opcional" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black" />
                            </label>
                            <label className="block mb-2">
                                Marca:
                                <input type="text" name="marca" value={formData.marca} onChange={handleChange} placeholder="Opcional" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black" />
                            </label>
                            <label className="block mb-2">
                                Modelo:
                                <input type="text" name="modelo" value={formData.modelo} onChange={handleChange} placeholder="Opcional" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black" />
                            </label>
                            <label className="block mb-2">
                                Cor:
                                <input type="text" name="cor" value={formData.cor} onChange={handleChange} placeholder="Opcional" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black" />
                            </label>
                            <label className="block mb-2">
                                Tamanho:
                                <input type="number" name="tamanho" value={formData.tamanho} onChange={handleChange} placeholder="Opcional" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black" />
                            </label>
                        </div>
                    )}

                    {!showInputs && (
                        <div className='bg-white text-blue rounded-xl mt-4 p-10'>
                            <label className="block mb-4 text bl">
                                Email:
                                <input type="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black" />
                            </label>
                            <label className="block mb-4">
                                Nome:
                                <input type="text" name="nome" value={formData.nome} onChange={handleChange} placeholder="Opcional" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black" />
                            </label>
                            <label className="block mb-4">
                                Idade:
                                <input type="number" name="idade" value={formData.idade} onChange={handleChange} placeholder="Opcional" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black" />
                            </label>
                            <label className="block mb-4">
                                Localidade:
                                <input type="text" name="localidade" value={formData.localidade} onChange={handleChange} placeholder="Opcional" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black" />
                            </label>
                            <label className="block mb-4">
                                Descrição:
                                <textarea name="descricao" value={formData.descricao} onChange={handleChange} placeholder="Descreve as sapatilhas aqui" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 " />
                            </label>
                        </div>

                    )}
                    {/* <button type="submit" className=" w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brown-700">Enviar Pedido</button> */}
                    <button className="bg-amber-950 ml-1/2 opacity-80 text-white font-bold py-2 text-lg mt-3 rounded-full" type='submit'>Submete o teu pedido</button>

                </form>

            </div>
        </div>
    );
}
