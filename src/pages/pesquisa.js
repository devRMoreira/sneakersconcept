import { fetchPesquisa } from "@/frontend/services/pesquisa"
import Link from "next/link"
import { useState } from "react"

export default function PesquisarProduto() {

    const [pesquisa, setPesquisa] = useState([])

    async function onChangeInput(e) {

        const resultado = await fetchPesquisa(e.target.value)
        setPesquisa((ps) => ps = resultado)

    }


    return (
        <div className="min-h-screen h-full flex flex-col ">
            <div className="border rounded-2xl mt-5 mx-1 h-13 flex items-center">
                <input
                    className="bg-transparent border-none focus:outline-none font-semibold text-xl text-start px-3 py-2"
                    type="text"
                    placeholder="Pesquisar..."
                    onChange={(e) => onChangeInput(e)}
                ></input>
            </div>
            {pesquisa.length > 0 ? pesquisa.map((ele) => <div>
                {ele.modelo}
                <br />

                {ele.marca}

            </div>
            ) : <div>
                <Link href={"/formulario"}>Não encontras o que queres? Fala connosco!</Link>
            </div>}
        </div>)
}