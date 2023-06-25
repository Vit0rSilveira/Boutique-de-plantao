import React, { useState, useEffect } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";
import "../styles/components/complete_product_card.css"

function Complete_product(props) {
  const [valor, setValor] = useState(props.valor);
  const [quantidade, setQuantidade] = useState(0);

  useEffect(() => {
    setValor(props.valor * quantidade);
  }, [quantidade]);


  function handleAmountChange(increment) {
    let newAmount = quantidade + increment;
    if (newAmount < 1) newAmount = 1;
    if (newAmount > props.quantidade_disponivel) newAmount = props.quantidade_disponivel;
    setQuantidade(newAmount);
  }

  return (
    <div id="complete-card-product">
      <img src={props.imagem} alt={`imagem do produto ${props.nome}`} id="product-image-complete" />
      <div id="not-image">
        <h1>{props.nome}</h1>
        <p>Disponibilidade: {props.quantidade_disponivel}</p>
        <p>
          {props.descricao}
        </p>
        <p>R$ {valor}</p>
        <div id="inputs">
          <button id="add-cart-product">
            <AiOutlineShoppingCart /> Adicionar
          </button>
          <div id="amount-wrapper">
            <button className="amount-button" onClick={() => handleAmountChange(-1)}><AiOutlineMinusCircle className="amount-icon" /> </button>
            <p id="amount-in-cart">{quantidade}</p>
            <button className="amount-button" onClick={() => handleAmountChange(1)}> <AiOutlinePlusCircle className="amount-icon" /> </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Complete_product;
