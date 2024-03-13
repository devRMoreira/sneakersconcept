import { validacaoLogin } from "@/backend/data/auth"

export default async function handler(req, res) {

    if (req.method === "POST") {

        if (!req.body.password || !req.body.email) {
            return res.status(400).json(undefined)
        }

        const utilizador = {
            email: req.body.email,
            password: req.body.password
        }

        const validacao = await validacaoLogin(utilizador)

        console.log(validacao)

        if (validacao.utilizadorRegistado) {

            return res.status(201).json(validacao.utilizadorRegistado)

        } else {

            return res.status(400).json(undefined)
        }

    } else {
        return res.status(404).json(undefined)
    }
}