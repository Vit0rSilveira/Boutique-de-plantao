import React from "react";
import {AiOutlineShoppingCart} from "react-icons/Ai"
import "../styles/product.css"

function Product() {
    return (
        <div id="product">
            <img src="../../images/produto.png" alt="imagem do produto" id="product-image" />
            <p>Nome</p>
                
                
            <div id="amount">
                <p>R$ preço</p>
                <input type="number" name="amount-product" id="amount-product" />
            </div>
            <button id="add-cart"><AiOutlineShoppingCart/>Adicionar</button>
        </div>
    )
}

export default Product