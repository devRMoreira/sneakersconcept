import { fetchProduto } from "@/frontend/services/produtos";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ProductPage = () => {

  const [produto, setProduto] = useState({})

  const router = useRouter()

  useEffect(() => {
    if (!router.isReady) return;

    const { id } = router.query

    async function getProduto() {

      const produto = await fetchProduto(id)

      setProduto(produto)
    }


    getProduto()

  }, [router.isReady]);



  return (Object.keys(produto).length > 0 ?
    <section className="text-white flex flex-col lg:flex-row md:px-10 gap-[5px] lg:gap-[100px] p-4">
      <h1 className="text-[24px] font-semibold  leading-tight">
      {produto.marca} {produto.modelo}
      </h1>


      <div className="flex items-center">
        <p className="mr-2 text-md pb- ">
          {produto.preco} €
        </p>

      </div>


      <Image
        className="rounded-xl overflow-hidden bg-white cursor-pointer duration-200 transform"

        width={500}
        height={500}
        alt="name"
        src={produto.foto}
      />
      <div className="flex-1 ">

        <div className="mb-10">
          <div className="flex justify-between mb-2 ">
            <div className="text-md font-semibold">Seleciona o Tamanho</div>

          </div>

          <div className="grid grid-cols-3 gap-2" >
            {produto.quantidade.map((ele) => ele.stock > 0 ?
              <div
                key={ele.tamanho}
                className="text-center py-2 rounded-md border border-black cursor-pointer"
              >
                {ele.tamanho}
              </div>
              :
              <div
                key={ele.tamanho}
                className="text-center py-2 rounded-md border bg-black bg-opacity-55 border-black cursor-pointer "
              >
                {ele.tamanho}
              </div>)}
          </div>


        </div>

        <button
          className="bg-amber-950  opacity-50 text-white font-bold py-2  px-28 text-xl rounded-full justify-center  pt-3 pb-3">
          Adicionar ao Carrinho
        </button>


      </div>
    </section> : <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('/backg2.jpg')" }}>
      <div className="flex justify-center items-center h-full">
        <Image src={"/loading.gif"} height={150} width={150} />
      </div>
    </div>

  );
}

export default ProductPage
