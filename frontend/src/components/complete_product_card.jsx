import React, { useState, useEffect } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { toast } from "react-toastify";
import Puglin from "../components/puglin";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import "../styles/components/complete_product_card.css"

function Complete_product(props) {
  const navigate = useNavigate();
  const [valor, setValor] = useState(props.valor);
  const [quantidade, setQuantidade] = useState(props.quantidade_disponivel <= 0 ? 0 : 1);

  useEffect(() => {
    setValor(props.valor * quantidade);
  }, [quantidade]);

  function handleAmountChange(increment) {
    let newAmount = quantidade + increment;
    if (newAmount < 1) newAmount = 1;
    if (newAmount > props.quantidade_disponivel) newAmount = props.quantidade_disponivel;
    setQuantidade(newAmount);
  }

  function handleAddToCart() {
    if (props.quantidade_disponivel <= 0) {
      toast.warning("Sem estoque")
      return
    }

    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    const existingItem = cartItems.find(item => item.codigo === props.codigo);


    if (existingItem) {
      existingItem.quantidade_carrinho += quantidade;
    } else {
      cartItems.push({
        codigo: props.codigo,
        nome: props.nome,
        valor: props.valor,
        quantidade_carrinho: quantidade,
        quantidade_disponivel: props.quantidade_disponivel,
        imagem: props.imagem
      });
    }

    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    navigate("/carrinho");
  };

  return (
    <div id="complete-card-product">
      <Puglin/>
      <img src={props.imagem} alt={`imagem do produto ${props.nome}`} id="product-image-complete" />
      <div id="not-image">
        <h1>{props.nome}</h1>
        <p>Disponibilidade: {props.quantidade_disponivel}</p>
        <p>
          {props.descricao}
        </p>
        <p>R$ {props.valor}</p>
        <div id="inputs">
          <button id="add-cart-product" onClick={handleAddToCart}>
            <AiOutlineShoppingCart /> Adicionar
          </button>
          <div id="amount-wrapper">
            <button className="amount-button1" onClick={() => handleAmountChange(-1)}><AiOutlineMinusCircle className="amount-icon1" /> </button>
            <p className="amount-in-cart1">{quantidade}</p>
            <button className="amount-button1" onClick={() => handleAmountChange(1)}> <AiOutlinePlusCircle className="amount-icon1" /> </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Complete_product;
