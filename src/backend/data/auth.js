import { validacaoPassword } from "../services/auth"
import { findOneDocument, insertDocument } from "./mongodb"

const defaultCollection = "utilizadores"

export async function validacaoLogin(utilizador) {

    const utilizadorRegistado = await procurarEmail(utilizador.email)

    if (!utilizadorRegistado || !validacaoPassword(utilizador.password, utilizadorRegistado.password)) {
        return {
            mensagem: "Dados inválidos.",
        }
    }

    return {
        mensagem: "Sucesso.",
        utilizadorRegistado
    }
}

export async function validacaoRegisto(utilizador) {

    if (await procurarEmail(utilizador.email)) {
        return {
            mensagem: "O email já se encontra registado.",
        }
    }

    const utilizadorAdicionado = await adicionarUtilizador(utilizador)

    return {
        mensagem: "Utilizador criado com sucesso!",
        utilizadorAdicionado
    }
}

export async function procurarEmail(email) {

    const filter = { email }

    return await findOneDocument(filter, defaultCollection)
}

export async function adicionarUtilizador(utilizador) {

    return await insertDocument(utilizador, defaultCollection)
}

