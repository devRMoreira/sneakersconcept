import BottomNavBar from '@/frontend/components/navbar';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const shoes = [
  // Add more shoe objects as needed

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
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
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
    });
  };

  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center pb-4">Costumiza os teus sneakers!</h1>
        <Image src="https://i.imgur.com/gS9DHPu.jpeg" alt="background" width={300} height={200} className="mx-auto" />

        {/*    <Link href="/home">
          <p className="text-center mt-4">Voltar para a página inicial</p>
        </Link> */}

        <h2 className="text-2xl font-bold mt-4 text-center">As nossas sapatilhas costumizadas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 justify-center mt-4">
          {shoes.map((shoe) => (
            <div key={shoe._id} className="border p-4">
              <Image
                src={shoe.foto}
                alt={`${shoe.marca} ${shoe.modelo}`}
                width={300}
                height={200}
                placeholder="empty"
                className="mx-auto"
              />
              <p className="text-center">{`${shoe.marca} ${shoe.modelo}`}</p>
              <p className="text-center">{`Preço: ${shoe.preco}€`}</p>
              <button onClick={() => alert('O seu produto foi adicionado')} className="block mx-auto">Adicionar ao Carrinho</button>
            </div>
          ))}
        </div>
      </div>
      <div>
        <BottomNavBar />
      </div>
    </>
  );
}