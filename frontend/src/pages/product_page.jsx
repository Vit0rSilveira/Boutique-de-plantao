import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/header";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Product from '../components/product_card';
import Complete_product from "../components/complete_product_card";
import Review from "../components/review";
import "../styles/pages/product.css";
import { useCookies } from "react-cookie";
import Edit_product from "../components/product_edit";

function ProductPage() {
  const { idProduto } = useParams();
  const [cookies] = useCookies(['credentials'])
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch("../jsons/flores.json")
      .then((response) => response.json())
      .then((data) => setProdutos(Object.values(data)))
      .catch((error) => console.log(error));
  }, []);

  const tipoUsuarioLogado = () => {
    if (cookies.credentials)
      return cookies.credentials.tipo
  }

  const produtoEncontrado = produtos.find(
    (produto) => produto.codigo === idProduto
  );

  function shuffle(array, remove) {
    const filteredArray = array.filter((produto) => produto.codigo !== remove);
    const shuffledArray = [...filteredArray];

    let currentIndex = shuffledArray.length;
    let temporaryValue, randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = shuffledArray[currentIndex];
      shuffledArray[currentIndex] = shuffledArray[randomIndex];
      shuffledArray[randomIndex] = temporaryValue;
    }

    return shuffledArray;
  }


  return (
    <>
      <Header />
      <Navbar />

      <main>
        {produtoEncontrado ? (
          tipoUsuarioLogado() === 'adm' ? (
            <Edit_product
              id={idProduto}
              codigo={idProduto}
              nome={produtoEncontrado.nome}
              valor={produtoEncontrado.valor}
              quantidade_disponivel={produtoEncontrado.quantidade_disponivel}
              descricao={produtoEncontrado.descricao}
              imagem={produtoEncontrado.imagem}
            />
          ) : (
            <Complete_product
              id={idProduto}
              codigo={idProduto}
              nome={produtoEncontrado.nome}
              valor={produtoEncontrado.valor}
              quantidade_disponivel={produtoEncontrado.quantidade_disponivel}
              descricao={produtoEncontrado.descricao}
              imagem={produtoEncontrado.imagem}
            />
          )
        ) : (
          <p>Carregando...</p>
        )}

        {produtos.length > 3 && (
          <div id="avaliacao">
            <h2>Você também vai gostar de</h2>
            <div id='recomendacoes'>
              {shuffle(produtos, idProduto).slice(0, 3).map((produtoo) => (
                <Product
                  codigo={produtoo.codigo}
                  nome={produtoo.nome}
                  quantidade_disponivel={produtoo.quantidade_disponivel}
                  valor={produtoo.valor}
                  descricao={produtoo.descricao}
                  imagem={produtoo.imagem}
                />
              ))}
            </div>
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}

export default ProductPage;
