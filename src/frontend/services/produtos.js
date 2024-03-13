export async function fetchFlashSales() {
    const res = (await fetch(`http://localhost:3000/api/produto/flash`))
    return await res.json()
}

export async function fetchTodosProdutos() {
    const res = (await fetch(`http://localhost:3000/api/produto/todos`))
    return await res.json()
}