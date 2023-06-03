import React from "react";
import {AiOutlineShoppingCart} from "react-icons/Ai"
import "../styles/product_card.css"

function Product() {
    return (
        <div id="product">
            <img src="../../images/produto.png" alt="imagem do produto" id="product-image" />
            <p>Nome</p>
            
            <div id="amount">
                <p>R$ {9.99}</p>
            </div>
            <button id="add-cart"><AiOutlineShoppingCart/>Adicionar</button>
        </div>
    )
}

export default Product