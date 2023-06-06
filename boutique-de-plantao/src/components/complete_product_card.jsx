import React, { useState, useEffect } from "react";
import { AiOutlineShoppingCart } from "react-icons/Ai";
import "../styles/components/complete_product_card.css"

function Complete_product(props) {
  const [valor, setValor] = useState(props.value);
  const [quantidade, setQuantidade] = useState(0);

  useEffect(() => {
    setValor(props.value * quantidade);
  }, [quantidade]);

  function handleQuantidadeChange(event) {
    const newQuantidade = parseInt(event.target.value);
    setQuantidade(newQuantidade);
  }

  return (
    <div id="complete-card-product">
      <img src={props.image} alt={`imagem do produto ${props.name}`} id="product-image-complete" />
      <div id="not-image">
          <h1>{props.name}</h1>
          <p>Disponibilidade: {props.amount_free}</p>
          <p>
            {props.descricao}
          </p>
          <p>R$ {valor}</p>
          <div id="inputs">
              <button id="add-cart-product">
                <AiOutlineShoppingCart /> Adicionar
              </button>
              <input
                type="number"
                min= "0"
                max={props.amount_free}
                id="qtd-requerida"
                onChange={handleQuantidadeChange}
              />
          </div>
      </div>
    </div>
  );
}

export default Complete_product;
