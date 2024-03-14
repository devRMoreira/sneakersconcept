import { inserirNovoPedido } from "@/backend/data/pedido"

export default async function handler(req, res) {

    if (req.method === "POST") {

        const novoPedido = {
            ...req.body,
            dataPedido: new Date().getTime()
        }

        const sucesso = await inserirNovoPedido(novoPedido)

        if (sucesso.insertedId) {

            return res.status(200).json(true)

        } else {

            return res.status(400).json(undefined)
        }

    } else {

        return res.status(404).json(undefined)

    }
}
