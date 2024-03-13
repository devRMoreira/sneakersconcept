export async function calculaVendas(vendas) {

    let totalVendas = []

    for (let i = 0; i < vendas.length; i++) {

        const indexId = totalVendas.findIndex((ele) => ele.idProduto === vendas[i].idProduto) ?? -1

        if (indexId === -1) {

            totalVendas.push({
                idProduto: vendas[i].idProduto,
                quantidade: 1
            })

        } else {

            totalVendas[indexId].quantidade++
        }
    }

    return totalVendas.sort((a, b) => a.quantidade - b.quantidade)
}


