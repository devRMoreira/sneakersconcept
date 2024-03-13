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
        <p className="text-white text-xl font-bold">Sneakers Team</p>
        <div className="bg-stone-700 w-[350px] rounded-lg p-4 mt-8 ">
          <p className="text-white text-lg font-bold mb-4 ">Saldos</p>

          <div className="grid grid-cols-2 gap-4 ">

            {produtos.flashSales ?
              produtos.flashSales.map((ele) => <div className="bg-white rounded-lg overflow-hidden ">
                <Link href={`/produto/${ele._id}`}>
                  <img src={ele.foto} className="w-[181px] h-[190px] rounded-lg drop-shadow-xl" />
                </Link>
              </div>) : undefined}

            <div className="bg-white rounded-lg overflow-hidden">

            </div>
          </div>
        </div>
        <div className="transparent  w-[350px] rounded-lg p-4 mt-8 ">
          <p className="text-white text-xl font-bold">Tendências</p>
          <div className="grid grid-cols-2 gap-4 drop-shadow-xl">

            {produtos.produtos ? produtos.produtos.map((ele) => <Link href={`/produto/${ele._id}`}>
              <Image src={ele.foto} width="180" height="150" className="w-[181px] h-[190px] rounded-lg drop-shadow-xl" />
            </Link>) : undefined}
          </div>
        </div>

      </div>

    </div>
  );
}
