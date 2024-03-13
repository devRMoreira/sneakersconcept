import { findDocuments } from "./mongodb";

const defaultCollection = "vendas"

export async function getVendas() {

    return await findDocuments({}, defaultCollection)
}