import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function NewProduct() {
    const [formData, setFormData] = useState({
        nome: "",
        codigo: "",
        categoria: "",
        descricao: "",
        quantidade: "",
        valor: "",
        imagem: null,
    });

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }

    const handleFileChange = (event) => {
        setFormData((prevData) => ({
            ...prevData,
            imagem: event.target.files[0],
        }));
    };

    function handleFormSubmit(event) {
        event.preventDefault();

        const {
            nome,
            codigo,
            categoria,
            descricao,
            quantidade,
            valor,
            imagem,
        } = formData;

        if (!nome || !codigo || !categoria || !descricao || !quantidade || !valor || !imagem) {
            toast.error("Por favor, preencha todos os campos obrigatórios.");
            return
        }  

        const requestBody = new FormData();
        requestBody.append("nome", nome);
        requestBody.append("codigo", codigo);
        requestBody.append("categoria", categoria);
        requestBody.append("descricao", descricao);
        requestBody.append("quantidade_disponivel", quantidade);
        requestBody.append("valor", valor);
        requestBody.append("file", imagem);
        

        fetch("http://localhost:3000/produto", {
            method: "POST",
            body: requestBody,
        })
            .then((response) => {
                if (!response.ok) {
                    if (response.status === 404) {
                        throw new Error("Endpoint not found");
                    } else if (response.status === 401) {
                        throw new Error("Unauthorized request");
                    } else if (response.status === 422) {
                        return response.json().then((data) => {
                            toast.error(data.message);
                            throw new Error("Request failed with status: " + response.status);
                        });
                    } else {
                        throw new Error("Request failed with status: " + response.status);
                    }
                }
                return response.json();
            })
            .then((data) => {
                toast("Produto inserido com sucesso.");
            })
            .catch((error) => {
                toast.error("Erro ao adicionar o produto")
                console.error("Error:", error.message);
            });

    }

    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="nome">Nome do Produto</label>
                <input type="text" id="nome" name="nome" onChange={handleInputChange} />
                <label htmlFor="codigo">Código do produto</label>
                <input type="text" id="codigo" name="codigo" onChange={handleInputChange} />
                <label htmlFor="categoria">Categoria</label>
                <input type="text" id="categoria" name="categoria" onChange={handleInputChange} />
                <label htmlFor="descricao">Descrição</label>
                <textarea name="descricao" id="descricao" cols="35" rows="3" onChange={handleInputChange}></textarea>
                <label htmlFor="quantidade">Quantidade</label>
                <input type="text" id="quantidade" name="quantidade" onChange={handleInputChange} />
                <label htmlFor="valor">Valor</label>
                <input type="text" id="valor" name="valor" onChange={handleInputChange} />
                <label htmlFor="imagem">Imagem</label>
                <input type="file" name="imagem" id="imagem" onChange={handleFileChange} />
                <input type="submit" value="Cadastrar" id="button-cadastrar-adm" />
            </form>
            <ToastContainer />
        </>
    );
}

export default NewProduct;
