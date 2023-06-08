import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "../styles/components/product_card.css";
import { useNavigate } from "react-router-dom";

function Product(props) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/produto`, {
            state: {
                nome: props.nome,
                descricao: props.descricao,
                quantidade_disponivel: props.quantidade_disponivel,
                imagem: props.imagem,
                avaliacao: props.avaliacao,
                valor: props.valor
            }
        });
    };


    return (
        <div id="product">
            <button id="product-button" onClick={handleClick}><img src={props.imagem} alt="imagem do produto" id="product-image" /> </button>
            <p>{props.nome}</p>

            <div id="amount">
                <p>R$ {props.valor}</p>
            </div>
            <button id="add-cart"><AiOutlineShoppingCart />Adicionar</button>
        </div>


    )
}

export default Product