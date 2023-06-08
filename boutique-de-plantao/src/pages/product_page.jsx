import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/header";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Complete_product from "../components/complete_product_card";
import Review from "../components/review";
import "../styles/pages/product.css"

function Product() {
  const location = useLocation();
  const { nome, descricao, quantidade_disponivel, imagem, avaliacao, valor } = location.state;

  return (

    <>
      <Header />
      <Navbar />

      <main>
        <Complete_product
          nome={nome}
          valor={valor}
          quantidade_disponivel={quantidade_disponivel}
          descricao={descricao}
          imagem={imagem}
        />

        {avaliacao.length > 0 && (
          <div id="avaliacao">
            <h2>Avaliações</h2>
            {avaliacao.length >= 1 && <Review nota={avaliacao[0].nota} comentario={avaliacao[0].comentario} />}
            {avaliacao.length >= 2 && <Review nota={avaliacao[1].nota} comentario={avaliacao[1].comentario} />}
          </div>
        )}

      </main>
      <Footer/> 
    </>
  );
}

export default Product;
