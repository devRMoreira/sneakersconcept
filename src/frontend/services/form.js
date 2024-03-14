export async function fetchForm(formulario) {

    const form = await fetch("/api/pedido", {
        method: "POST",
        body: JSON.stringify(formulario),
        headers: {
            'content-type': 'application/json'
        }
    })


    return form.ok
}