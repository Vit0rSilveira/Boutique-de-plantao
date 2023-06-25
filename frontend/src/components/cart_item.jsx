import React, { useState } from "react";
import { ImCross } from "react-icons/im";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";
import "../styles/components/cart_item.css";

function Item(props) {
    const [amount, setAmount] = useState(props.quantidade_carrinho);

    function handleAmountChange(increment) {
        let newAmount = amount + increment;
        if (newAmount < 1) newAmount = 1;
        if (newAmount > props.quantidade_disponivel) newAmount = props.quantidade_disponivel;
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

            <div id="amount-wrapper">
                <button className="amount-button" onClick={() => handleAmountChange(-1)}><AiOutlineMinusCircle className="amount-icon" /> </button>
                <p id="amount-in-cart">{amount}</p>
                <button className="amount-button" onClick={() => handleAmountChange(1)}> <AiOutlinePlusCircle className="amount-icon" /> </button>
            </div>

            <div id="total-price">
                <p>Total: R$ {price ? price.toFixed(2) : 0.00}</p>
            </div>

            <button id="remove-item" onClick={props.onDelete}> <ImCross id="cross" /> </button>
        </div>
    );
}

export default Item;
