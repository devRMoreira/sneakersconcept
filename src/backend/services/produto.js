import { getProduto } from "../data/produto"

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