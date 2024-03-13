import { findDocuments } from "./mongodb"

const defaultCollection = "produtos"

export async function procurarProdutos(pesquisa) {

    const regex = new RegExp(pesquisa, "i")

    const filter = {
        $or: [
            { "marca": { $regex: regex } },
            { "modelo": { $regex: regex } }
        ]
    }


    const produtosEncontrados = await findDocuments(filter, defaultCollection)

    return produtosEncontrados.toSorted((a, b) => a.modelo.toLowerCase().localeCompare(b.modelo.toLowerCase()))
}