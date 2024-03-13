import { getProdutosRandom } from "../data/produto"
import { getVendas } from "../data/vendas"
import { calculaVendas } from "./vendas"

export async function getFlashSales() {

    const vendas = await getVendas()

    const totalVendas = await calculaVendas(vendas)

    const produtosRandom = await getProdutosRandom(totalVendas)

    return produtosRandom
}