import { getProduto, getTodosProdutos } from "@/backend/data/produto"
import { getFlashSales } from "@/backend/services/produto"

export default async function handler(req, res) {

  if (req.method === "GET") {

    const id = req.query.id

    if (id === "flash") {

      const produtos = await getFlashSales()

      return res.status(200).json(produtos)

    }

    if (id === "todos") {

      const produtos = await getTodosProdutos()

      return res.status(200).json(produtos)

    }


    const produto = await getProduto(id)

    return res.status(200).json(produto)

  } else {

    return res.status(404).json(undefined)
  }



}
