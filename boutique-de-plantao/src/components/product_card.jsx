import React from "react";
import {AiOutlineShoppingCart} from "react-icons/ai";
import "../styles/components/product_card.css";

function Product(props) {
    return (
        <div id="product">
            <img src={props.image} alt="imagem do produto" id="product-image" />
            <p>{props.name}</p>
            
            <div id="amount">
                <p>R$ {props.value}</p>
            </div>
            <button id="add-cart"><AiOutlineShoppingCart/>Adicionar</button>
        </div>
    )
}

export default Product