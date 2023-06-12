import React, { useState, useEffect } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "../styles/components/complete_product_card.css"

function Complete_product(props) {
  const [valor, setValor] = useState(props.valor);
  const [quantidade, setQuantidade] = useState(0);

  useEffect(() => {
    setValor(props.valor * quantidade);
  }, [quantidade]);

  function handleQuantidadeChange(event) {
    let newQuantidade = parseInt(event.target.value);
    if (!newQuantidade)
      newQuantidade = 0;

    setQuantidade(newQuantidade);
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
          <input
            type="number"
            min="0"
            max={props.quantidade_disponivel}
            id="qtd-requerida"
            onChange={handleQuantidadeChange}
          />
        </div>
      </div>
    </div>
  );
}

export default Complete_product;
