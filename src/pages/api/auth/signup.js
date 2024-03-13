import { validacaoRegisto } from "@/backend/data/auth"



export default async function handler(req, res) {

    if (req.method === "POST") {

        if ((!req.body.nome || !req.body.password) || !req.body.email) {
            return res.status(400).json(undefined)
        }

        const utilizador = {
            nome: req.body.nome,
            email: req.body.email,
            password: req.body.password
        }

        const validacao = await validacaoRegisto(utilizador)

        if (validacao.mensagem.includes("sucesso")) {
            return res.status(201).json(validacao.utilizadorAdicionado)
        } else {
            return res.status(400).json(validacao)
        }

    } else {
        return res.status(404).json(undefined)
    }
}

