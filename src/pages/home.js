import { fetchFlashSales, fetchTodosProdutos } from "@/frontend/services/produtos"
import Image from "next/image"
import Link from "next/link"

import { useEffect, useState } from "react"


export default function Home() {

  const [produtos, setProdutos] = useState({
    flashSales: [],
    produtos: [],
    loading: true
  })

  useEffect(() => {

    async function fetchDados() {
      const flashSales = await fetchFlashSales()
      setProdutos((ps) => ({ ...ps, flashSales }))


      const produtos = await fetchTodosProdutos()
      setProdutos((ps) => ({ ...ps, produtos }))

      setProdutos((ps) => ({ ...ps, loading: false }))
    }

    fetchDados()

  }, [])

  return (
    <div className="relative ">
      <div className=" inset-0 overflow-hidden bg-cover bg-center z-0 fixed" style={{ backgroundImage: "url('/backg2.jpg')" }} />
      <div className="relative inset-0 flex flex-col items-center justify-center h-full bg-transparent">
        <img src="/logobranco.png" alt="logo" className="w-60 h-auto" />
        <div className="flex ">
          <p className="text-white text-xl m-[10px] font-bold">Sneakers Team</p>
        </div>
        <Link href={"produto/65f1aea6e6a0e41cf6583942"}>
          <img src="/peeps.png" alt="logo" className="w-[350px] h-auto" />
        </Link>
        <div className="bg-sky-950 w-[343px] rounded-[15px] p-4 mt-8 ">
          <div className="flex justify-between ">
            <p className="text-white text-lg font-bold mb-4 ">Saldos</p>
            <p className="text-white text-lg font-bold mb-4  ">30%</p>
          </div>

          <div className="grid grid-cols-2 gap-4 ">

            {produtos.flashSales ?
              produtos.flashSales.map((ele) => <div className="bg-white rounded-lg overflow-hidden ">
                <Link href={`/produto/${ele._id}`}>
                  <img src={ele.foto} className="w-[180px] h-[150px] rounded-lg drop-shadow-xl" />
                </Link>
              </div>)
              : <div className="flex justify-center items-center h-full">
                <Image src={"/loading.gif"} height={150} width={150} />
              </div>}

            <div className="bg-white rounded-lg overflow-hidden">
            </div>
          </div>
        </div>
        <div className="transparent  w-[343px] rounded-lg p-4 mt-8 ">
          <div className="flex justify-between ">
            <p className="text-white text-lg mb-4  font-bold">Tendências</p>

          </div>
          <div className="grid grid-cols-2 gap-4 drop-shadow-xl">

            {produtos.produtos ? produtos.produtos.map((ele) => <Link href={`/produto/${ele._id}`}>
              <Image src={ele.foto} width="180" height="150" className="rounded-lg drop-shadow-xl" />
            </Link>)
              : <div className="flex justify-center items-center h-full">
                <Image src={"/loading.gif"} height={150} width={150} />
              </div>}
          </div>
        </div>
      </div>
    </div>
  );
}
