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
    <section className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px] p-4">
      <Image
        width={500}
        height={500}
        alt="name"
        src={produto.foto}
      />
      {/* Right Column - Prodct Details Section */}
      <div className="flex-1 py-3">
        {/* Product Tittle */}
        <h1 className="text-[34px] font-semibold mb-2 leading-tight">
          {produto.modelo}
        </h1>

        {/* Product Subtittle */}
        <h2 className="text-lg font-semibold mb-5">{produto.marca}</h2>

        {/* Product Price */}

        <div className="flex items-center">
          <p className="mr-2 text-lg font-semibold">
            {produto.preco} €
          </p>
          {/* product.original_price && (
            <>
              <p className="text-base font-semibold line-through">
                &#8377; {product.original_price}
              </p>
              <p className="ml-auto text-base font-medium text-green-500">
                {getDiscount(product.original_price, product.price)}% off
              </p>
            </>
          ) */}
        </div>

        {/*     <p className="text-md font-medium text-black/[.5]">
          incl. of taxes
        </p>
        <p className="text-md font-medium text-black/[.5] mb-20">
          &#40;Also includes all applicable duties&#41;
        </p> */}

        {/* Product Size Selection Section */}
        <div className="mb-10">
          {/* Heading */}
          <div className="flex justify-between mb-2 ">
            <div className="text-md font-semibold">Select Size</div>
            {/* <div className="text-md font-medium text-black/[.5] cursor-pointer">
              Select Guide
            </div> */}
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
                className="text-center py-2 rounded-md border bg-black bg-opacity-55 border-black cursor-pointer"
              >
                {ele.tamanho}
              </div>)}
          </div>


        </div>

        {/* Add to Cart button */}
        <button
          className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
        >
          Add to Cart
        </button>

        {/* Add to Wishlist button */}

        {/* Product Details */}
        <div>
          <div className="text-lg font-bold mb-5">Product Details</div>
          <div className="markdown text-md mb-5">
            olaolaola
          </div>
        </div>
      </div>
    </section> : undefined
  );
}

export default ProductPage
