import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Puglin from "./puglin";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "../styles/components/product_card.css";

function ProductCard(props) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/produto/${props.codigo}`);
    };

    const handleAddToCart = () => {
        if (props.quantidade_disponivel <= 0) {
            toast.warning("Sem estoque")
            return
        }

        const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

        const existingItem = cartItems.find(item => item.codigo === props.codigo);

        if (existingItem) {
            existingItem.quantidade_carrinho += 1;
        } else {
            cartItems.push({
                codigo: props.codigo,
                nome: props.nome,
                valor: props.valor,
                quantidade_carrinho: 1,
                quantidade_disponivel: props.quantidade_disponivel,
                imagem: props.imagem
            });
        }

        localStorage.setItem("cartItems", JSON.stringify(cartItems));

        navigate("/carrinho");
    };

    return (
        <div id="product">
            <Puglin />
            <button id="product-button" onClick={handleClick}><img src={props.imagem} alt="imagem do produto" id="product-image" /> </button>
            <p>{props.nome}</p>

            <div id="amount">
                <p>R$ {props.valor}</p>
            </div>
            <button id="add-cart" onClick={handleAddToCart}><AiOutlineShoppingCart />Adicionar</button>
        </div>

    )
}

export default ProductCard;