import React, { useState } from "react";
import { ImCross } from "react-icons/im";
import "../styles/components/cart_item.css";

function Item(props) {
    const [amount, setAmount] = useState(props.quantidade_carrinho);

    function handleAmountChange(event) {
        let newAmount = parseInt(event.target.value);
        if (!newAmount) newAmount = 0;
        setAmount(newAmount);

        const newPrice = props.valor * newAmount;
        props.onCallback(newPrice);
    }

    const price = props.valor * amount;

    return (
        <div id="cart-item">
            <img src={props.imagem} alt={`imagem do produto ${props.nome}`} id="item-image" />
            <p>{props.nome}</p>

            <div id="price">
                <p>Unidade: R$ {props.valor ? props.valor.toFixed(2) : 0.00}</p>
            </div>

            <input
                type="number"
                min="1"
                value={amount}
                max={props.quantidade_disponivel}
                id="amount-in-cart"
                onChange={handleAmountChange}
            />

            <div id="total-price">
                <p>Total: R$ {price? price.toFixed(2) : 0.00}</p>
            </div>

            <button id="remove-item" onClick={props.onDelete}>
                <ImCross id="cross"/>
            </button>
        </div>
    );
}

export default Item;
