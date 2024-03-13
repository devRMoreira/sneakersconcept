import { insertDocument } from "./mongodb"

const defaultCollection = "pedidos"

export async function inserirNovoPedido(pedido) {

    const sucesso = await insertDocument(pedido, defaultCollection)

    return sucesso
}