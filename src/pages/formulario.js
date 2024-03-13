import { useState } from 'react';

export default function PedidoForm() {
    const [formData, setFormData] = useState({
        email: '',
        nome: '',
        idade: '',
        localidade: '',
        marca: '',
        modelo: '',
        cor: '',
        tamanho: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setFormData({
            email: '',
            nome: '',
            idade: '',
            localidade: '',
            marca: '',
            modelo: '',
            cor: '',
            tamanho: ''
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Email:
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </label>
            <br />
            <label>
                Nome:
                <input type="text" name="nome" value={formData.nome} onChange={handleChange} required />
            </label>
            <br />
            <label>
                Idade:
                <input type="text" name="idade" value={formData.idade} onChange={handleChange} />
            </label>
            <br />
            <label>
                Localidade:
                <input type="text" name="localidade" value={formData.localidade} onChange={handleChange} />
            </label>
            <br />
            <label>
                Marca:
                <input type="text" name="marca" value={formData.marca} onChange={handleChange} />
            </label>
            <br />
            <label>
                Modelo:
                <input type="text" name="modelo" value={formData.modelo} onChange={handleChange} />
            </label>
            <br />
            <label>
                Cor:
                <input type="text" name="cor" value={formData.cor} onChange={handleChange} />
            </label>
            <br />
            <label>
                Tamanho:
                <input type="text" name="number" value={formData.tamanho} onChange={handleChange} />
            </label>
            <br />
            <button type="submit">Enviar Pedido</button>
        </form>
    );
}
