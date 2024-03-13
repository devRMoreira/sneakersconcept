import { ObjectId } from "mongodb"
import { findDocuments, findOneDocument } from "../data/mongodb"
import { getVendas } from "./vendas"
import { calculaVendas } from "../services/vendas"
import { getProdutosRandom } from "../services/produto"


const defaultCollection = "produtos"

export async function getProduto(id) {

    const filter = { _id: new ObjectId(id) }
    const produto = await findOneDocument(filter, defaultCollection)

    return produto
}

export async function getFlashSales() {

    const vendas = await getVendas()

    const totalVendas = await calculaVendas(vendas)

    const produtosRandom = await getProdutosRandom(totalVendas)

    return produtosRandom
}

export async function getTodosProdutos() {

    return await findDocuments({}, defaultCollection)

}