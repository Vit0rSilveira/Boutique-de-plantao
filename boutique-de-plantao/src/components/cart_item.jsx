import React, { useState, useEffect } from "react";
import "../styles/components/cart_item.css";

function Item(props) {
    const [price, setPrice] = useState(props.value);
    const [amount, setAmount] = useState(1);

    useEffect (() => {
        setPrice(props.value * amount);
    }, [amount]);

    function handleAmountChange(event) {
        const newAmount = parseInt(event.target.value);
        setAmount(newAmount);
    }

    return (
        <div id="cart-item">
            <img src={props.image} alt={`imagem do produto ${props.name}`} id="item-image" />
            <p>{props.name}</p>
            
            <div id="price">
                <p>R$ {props.value}</p>
            </div>

            <div id="total-price">
                <p>R$ {price}</p>
            </div>

            <div id="inputs">
              <input
                type="number"
                min= "0"
                max={props.amount_free}
                id="amount-in-cart"
                onChange={handleAmountChange}
              />
          </div>
        </div>
    )
}

export default Item;