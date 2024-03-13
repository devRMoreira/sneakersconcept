import { ObjectId } from "mongodb"
import { findDocuments, findOneDocument } from "../data/mongodb"
import { calculaVendas, getVendas } from "./vendas"

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

export async function getProdutosRandom(totalVendas) {

    const idPrimeiroProduto = totalVendas[Math.floor(Math.random() * 5)].idProduto

    let idSegundoProduto = totalVendas[Math.floor(Math.random() * 5)].idProduto


    while (idSegundoProduto == idPrimeiroProduto) {

        idSegundoProduto = totalVendas[Math.floor(Math.random() * 5)]

    }

    const primeiroProduto = await getProduto(idPrimeiroProduto)
    
    const segundoProduto = await getProduto(idSegundoProduto)

    return [primeiroProduto,segundoProduto]

}