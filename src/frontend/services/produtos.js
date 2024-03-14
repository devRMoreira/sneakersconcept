export async function fetchFlashSales() {
    const res = (await fetch(`/api/produto/flash`))
    return await res.json()
}

export async function fetchTodosProdutos() {
    const res = (await fetch(`/api/produto/todos`))
    return await res.json()
}

export async function fetchProduto(id) {
    const res = (await fetch(`/api/produto/${id}`))
    return await res.json()
}