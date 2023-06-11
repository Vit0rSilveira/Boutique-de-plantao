import React, { useState, useEffect } from "react";
import { ImCross } from "react-icons/im";
import "../styles/components/cart_item.css";

function Item(props) {
    const [price, setPrice] = useState(props.valor);
    const [amount, setAmount] = useState(props.quantidade_carrinho);

    useEffect (() => {
        setPrice(props.valor * amount);
    }, [amount]);

    function handleAmountChange(event) {
        let newAmount = parseInt(event.target.value);
        if (!newAmount)
            newAmount = 0;
        setAmount(newAmount);
    }
    

    return (
        <div id="cart-item">
            <img src={props.imagem} alt={`imagem do produto ${props.nome}`} id="item-image" />
            <p>{props.nome}</p>
            
            <div id="price">
                <p>Unidade: R$ {props.valor}</p>
            </div>

            <input
                type="number"
                required
                min= "1"
                max={props.quantidade_disponivel}
                placeholder={props.quantidade_carrinho}
                id="amount-in-cart"
                onChange={handleAmountChange}
            />
                

            <div id="total-price">
                <p>Total: R$ {price}</p>
            </div>

            <button id="remove-item">
                <ImCross />
            </button>

        </div>
    )
}

export default Item;