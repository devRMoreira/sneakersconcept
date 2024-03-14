import { fetchPesquisa } from "@/frontend/services/pesquisa"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function PesquisarProduto() {

    const [pesquisa, setPesquisa] = useState([])

    async function onChangeInput(e) {

        const resultado = await fetchPesquisa(e.target.value)
        setPesquisa((ps) => ps = resultado)

    }
    const linkStyle = {
        color: 'white',          // Cor do texto
        textDecoration: 'none', // Remover sublinhado padrão
        fontWeight: 'bold', 
        fontSize: '2.2rem',
        textAlign: 'center', 
        paddingTop: '12.8rem',
        paddingLeft: '2rem',
        paddingRight: '2rem',
        textShadow: '10px 30px 4px rgba(0, 0, 0, 0.1)',
       
          // Negrito
        // Adicione mais estilos conforme necessário
      };


    return (
        <div className="relative bg-cover bg-center h-screen  " style={{ backgroundImage: "url('/backg2.jpg')" }}>
            <div className="min-h-screen h-full flex flex-col pt-14 pl-5 pr-5">
                <div className="border rounded-2xl mt-5  h-13 flex items-center pl-2">
                    <input
                        className=" bg-transparent border-none focus:outline-none font-semibold text-xl text-start px-3 py-2 text-white"
                        type="text"
                        placeholder="Pesquisar..."
                        onChange={(e) => onChangeInput(e)}
                    ></input>
                </div>
               
                {pesquisa.length > 0 ? pesquisa.map((ele) => <div className="bg-white/10 pl-6 pt-7 pb-5 text-white border-t ">
                <Image src={ele.foto} width="140" height="140" classeName="rounded-full"/>
                    {ele.modelo} 
                    <br />

                    {ele.marca}

                </div>
                ) :
                        <Link classeName=" text-white" href={"/formulario"}style={linkStyle} >Não encontras o que queres? Fala connosco!</Link>
                
                }
            </div>
        </div>
    )
}