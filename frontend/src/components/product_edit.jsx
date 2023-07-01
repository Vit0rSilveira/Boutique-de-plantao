import React, { useState, useEffect } from "react";
import { AiFillSave, AiFillDelete } from "react-icons/ai";
import "../styles/components/complete_edit_product.css";

function Edit_product(props) {
    const [valor, setValor] = useState(props.valor);
    const [disponibilidade, setDisponibilidade] = useState(props.quantidade_disponivel);
    const [imagem, setImagem] = useState(null);

    function handleSaveChanges() {
        const formData = new FormData();
        formData.append("nome", document.querySelector("#complete-edit-product input[type='text']").value);
        formData.append("quantidade_disponivel", disponibilidade);
        formData.append("descricao", document.querySelector("#complete-edit-product textarea").value);
        formData.append("imagem", imagem);
        formData.append("valor", valor); // Include 'valor' in the form data

        const codigo = props.codigo;

        fetch(`http://localhost:3000/produto/${codigo}`, {
            method: "PATCH",
            body: formData,
        })
            .then((response) => {
                return response.json(); // Converte o corpo da resposta em um objeto JavaScript
            })
            .then((data) => {
                alert(data.message); // Acessa a propriedade 'message' do objeto retornado
            })
            .catch((error) => {
                // Lógica de erro
                console.error("Erro ao salvar as alterações", error);
            });
    }

    function handleDellItem() {
        const codigo = props.codigo;
        fetch(`http://localhost:3000/produto/${codigo}`, {
            method: "DELETE",
        })
            .then((response) => {
                return response.json(); // Converte o corpo da resposta em um objeto JavaScript
            })
            .then((data) => {
                alert(data.message); // Acessa a propriedade 'message' do objeto retornado
            })
            .catch((error) => {
                // Lógica de erro
                console.error("Erro ao salvar as alterações", error);
            });
    }

    function handleImageChange(event) {
        const file = event.target.files[0];
        setImagem(file);
    }

    return (
        <div id="complete-edit-product">
            <img
                src={props.imagem}
                alt={`imagem do produto ${props.nome}`}
                id="product-image-complete"
            />
            <div id="not-image">
                <input type="text" defaultValue={props.nome} />
                <p>
                    Disponibilidade:{" "}
                    <input
                        type="number"
                        min="0"
                        value={disponibilidade}
                        onChange={(e) => setDisponibilidade(e.target.value)}
                    />
                </p>
                <p>
                    Valor:{" "}
                    <input
                        type="number"
                        min="0"
                        value={valor}
                        onChange={(e) => setValor(e.target.value)}
                    />
                </p>
                <textarea defaultValue={props.descricao}></textarea>
                <div id="inputs">
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                    <div id="buttons-edit-product">
                        <button id="edit-cart-product" onClick={handleSaveChanges}>
                            <AiFillSave /> Salvar alterações
                        </button>
                        <br />
                        <button id="dell-cart-product" onClick={handleDellItem}>
                            <AiFillDelete /> Deletar Item
                        </button>
                    </div>
                </div>
                    
            </div>

        </div>
    );
}

export default Edit_product;