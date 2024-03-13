import { getFlashSales, getProduto } from "@/backend/services/produto"

export default async function handler(req, res) {

  if (req.method === "GET") {

    if (req.query.id === "flash") {

      const produtos = await getFlashSales()

      return res.status(200).json(produtos)

    }


    const id = req.query.id



    const produto = await getProduto(id)

    return res.status(200).json(produto)
  }



}
