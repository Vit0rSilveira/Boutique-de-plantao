import React, { useState } from "react";

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
            alert("Por favor, preencha todos os campos obrigatórios.");
            return;
        }

        const requestBody = new FormData();
        requestBody.append("nome", nome);
        requestBody.append("codigo", codigo);
        requestBody.append("categoria", categoria);
        requestBody.append("descricao", descricao);
        requestBody.append("quantidade", quantidade);
        requestBody.append("valor", valor);
        requestBody.append("imagem", imagem);

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
                            alert(data.message);
                            throw new Error("Request failed with status: " + response.status);
                        });
                    } else {
                        throw new Error("Request failed with status: " + response.status);
                    }
                }
                console.log(response);
                return response.json();
            })
            .then((data) => {
                console.log("Produto inserido com sucesso.");
            })
            .catch((error) => {
                console.error("Error:", error.message);
            });
    }

    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="nome-produto">Nome do Produto</label>
                <input type="text" id="nome-produto"/>
                <label htmlFor="cod">Código do produto</label>
                <input type="text" id="cod"/>
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
        </>
    );
}

export default NewProduct;
