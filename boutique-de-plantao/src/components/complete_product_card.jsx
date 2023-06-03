import React, { useState, useEffect } from "react";
import { AiOutlineShoppingCart } from "react-icons/Ai";
import "../styles/complete_product_card.css"

function Complete_product() {
  let preco = 9.99;
  let qtdDisponivel = 10;
  const [valor, setValor] = useState(0.00);
  const [quantidade, setQuantidade] = useState(0);

  useEffect(() => {
    setValor(preco * quantidade);
  }, [quantidade]);

  function handleQuantidadeChange(event) {
    const newQuantidade = parseInt(event.target.value);
    setQuantidade(newQuantidade);
  }

  return (
    <div id="complete-card-product">
      <img src="../../images/produto.png" alt="imagem do produto" id="product-image-complete" />
      <div id="not-image">
          <h1>Nome Produto</h1>
          <p>Disponibilidade: {qtdDisponivel}</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam veniam
            quos repellat laborum, quidem sunt quibusdam voluptates reiciendis.
            Ratione quia qui cum ad dolore accusantium minima facilis dolorum
            voluptatem ut.
          </p>
          <p>R$ {valor}</p>
          <div id="inputs">
              <button id="add-cart-product">
                <AiOutlineShoppingCart />Adicionar
              </button>
              <input
                type="number"
                min="0"
                max={qtdDisponivel}
                id="qtd-requerida"
                onChange={handleQuantidadeChange}
              />
          </div>
      </div>
    </div>
  );
}

export default Complete_product;
