import React, { useState, useEffect } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import "../styles/components/complete_edit_product.css";

function Edit_product(props) {
    const navigate = useNavigate();
    const [valor, setValor] = useState(props.valor);
    const [quantidade, setQuantidade] = useState(1);
    const [disponibilidade, setDisponibilidade] = useState(
        props.quantidade_disponivel
    );
    const [imagem, setImagem] = useState(null);

    useEffect(() => {
        setValor(props.valor * quantidade);
    }, [quantidade]);

    function handleSaveChanges() {
        const formData = new FormData();
        formData.append("nome", document.querySelector("#complete-edit-product input[type='text']").value);
        formData.append("disponibilidade", disponibilidade);
        formData.append("descricao", document.querySelector("#complete-edit-product textarea").value);
        formData.append("imagem", imagem);

        const codigo = props.codigo;

        fetch(`http://localhost:3000/produto/${codigo}`, {
            method: "PATCH",
            body: formData,
        })
            .then((response) => {
                if (response.ok) {
                    // Lógica de sucesso
                    console.log("Alterações salvas com sucesso");
                } else {
                    // Lógica de erro
                    console.error("Erro ao salvar as alterações");
                }
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
                <textarea defaultValue={props.descricao}></textarea>
                <div id="inputs">
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                    <button id="add-cart-product" onClick={handleSaveChanges}>
                        <AiOutlineShoppingCart /> Salvar alterações
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Edit_product;
