import { procurarProdutos } from "@/backend/data/pesquisa"


export default async function handler(req, res) {

    if (req.method === "GET") {

        const pesquisa = req.query.id

        const resultado = await procurarProdutos(pesquisa)

        return res.status(200).json(resultado)
    } else {

        return res.status(404).json(undefined)

    }
}
