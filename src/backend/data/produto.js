import { findDocuments, findOneDocument, updateOneDocument } from "../data/mongodb"
import { setFilterId } from "../services/util"

const defaultCollection = "produtos"

export async function getProduto(id) {

    const filter = setFilterId(id)
    const produto = await findOneDocument(filter, defaultCollection)

    return produto
}

export async function getTodosProdutos() {

    return await findDocuments({flash:false}, defaultCollection)
}

export async function getProdutosRandom(totalVendas) {

    const idPrimeiroProduto = totalVendas[Math.floor(Math.random() * 5)].idProduto

    let idSegundoProduto = totalVendas[Math.floor(Math.random() * 5)].idProduto


    while (idSegundoProduto == idPrimeiroProduto) {

        idSegundoProduto = totalVendas[Math.floor(Math.random() * 5)].idProduto

    }

    const primeiroProduto = await getProduto(idPrimeiroProduto)

    const segundoProduto = await getProduto(idSegundoProduto)

    await setFlashSales(String(primeiroProduto._id), String(segundoProduto._id))

    return [primeiroProduto, segundoProduto]
}


async function setFlashSales(idPrimeiro, idSegundo) {

    const produtos = await getTodosProdutos()


    for (let i = 0; i < produtos.length; i++) {

        const filter = setFilterId(produtos[i]._id)

        if (String(produtos[i]._id) === idPrimeiro || String(produtos[i]._id) === idSegundo) {

            const update = {
                $set: {
                    flash: true
                }
            }

            const cenas = await updateOneDocument(filter, update, defaultCollection)

            console.log(cenas)

        } else {
            console.log("false")
            const update = {
                $set: {
                    flash: false
                }
            }

            const cenas = await updateOneDocument(filter, update, defaultCollection)

            console.log(cenas)
        }
    }

    return
}
