import React from "react";
import {AiOutlineShoppingCart} from "react-icons/Ai"

function Complete_product() {
    return (
        <div>
            <h1>Nome Produto</h1>
            <p>Disponibilidade: {10}</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam veniam quos repellat laborum, quidem sunt quibusdam voluptates reiciendis. Ratione quia qui cum ad dolore accusantium minima facilis dolorum voluptatem ut.</p>
            <img src="../../images/produto.png" alt="imagem do produto" id="product-image-complete" />
            <p>R$ {9.99}</p>
            <button id="add-cart-product"><AiOutlineShoppingCart/>Adicionar</button>
            <input type="number" />
        </div>
    )
}

export default Complete_product