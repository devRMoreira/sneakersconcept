import Image from "next/image";
import { Inter } from "next/font/google";


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
    <Image
      src="/background.jpg"
      alt="background"
      layout="fill"
      objectFit='cover'
    />

  );
}
