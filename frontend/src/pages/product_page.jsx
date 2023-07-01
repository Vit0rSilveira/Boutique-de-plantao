import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/header";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Complete_product from "../components/complete_product_card";
import Review from "../components/review";
import "../styles/pages/product.css";
import { useCookies } from "react-cookie";
import Edit_product from "../components/product_edit";

function Product() {
  const { codProduto } = useParams();
  const [cookies] = useCookies(['credentials'])
  const [produto, setProduto] = useState(null); // Definir o estado inicial como null

  useEffect(() => {
    fetch(`http://localhost:3000/produto/codigo/${codProduto}`)
      .then((response) => response.json())
      .then((data) => setProduto(data)) // Atualizar o estado com o objeto retornado
      .catch((error) => console.log(error));
  }, [codProduto]); // Adicionar codProduto como dependência do useEffect para buscar o produto correto

  const tipoUsuarioLogado = () => {
    if (cookies.credentials)
      return cookies.credentials.tipo
  }

  return (
    <>
      <Header />
      <Navbar />

      <main>
        {produto ? (
          tipoUsuarioLogado() === 'adm' ? (
            <Edit_product
              id={codProduto}
              codigo={codProduto}
              nome={produto.nome}
              valor={produto.valor}
              quantidade_disponivel={produto.quantidade_disponivel}
              descricao={produto.descricao}
              imagem={`http://localhost:3000/${produto.imagem.replace("public/", "")}`}
            />
          ) : (
            <Complete_product
              id={codProduto}
              codigo={codProduto}
              nome={produto.nome}
              valor={produto.valor}
              quantidade_disponivel={produto.quantidade_disponivel}
              descricao={produto.descricao}
              imagem={`http://localhost:3000/${produto.imagem.replace("public/", "")}`}
            />
          )
        ) : (
          <p>Carregando...</p>
        )}
      </main>

      <Footer />
    </>
  );
}

export default Product;
