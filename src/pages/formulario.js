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
        <div className="container mx-auto p-4">
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div>
                    <p>Tens um modelo específico de sapatilhas em mente?</p>
                    <div
                        onClick={handleToggleInputs}
                        style={{
                            cursor: 'pointer',
                            backgroundColor: showInputs ? '#e5e5e5' : 'transparent',
                            padding: '0.5rem',
                            borderRadius: '0.5rem'
                        }}
                    >
                        Não sabes o que queres?
                    </div>
                </div>
                {showInputs && (
                    <div>
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
                    </div>
                )}
                {!showInputs && (
                    <div>
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
                            <p>Por favor, descreve as sapatilhas:</p>
                            <textarea name="descricao" value={formData.descricao} onChange={handleChange} placeholder="Descreve as sapatilhas aqui" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                        </label>
                    </div>
                )}
                <button type="submit" className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Enviar Pedido</button>
            </form>
            <div className="my-4">
                <h2 className="text-lg font-semibold mb-2">Form Data</h2>
                <pre>{JSON.stringify(formData, null, 2)}</pre>
            </div>
            <Link href="/home">
                <p>De volta para a página inicial</p>
            </Link>
        </div>
    );
}
