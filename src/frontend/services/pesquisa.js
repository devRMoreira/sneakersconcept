export async function fetchPesquisa(termoPesquisa) {
    const res = await fetch(`/api/pesquisa/${termoPesquisa}`)
    return await res.json()
}