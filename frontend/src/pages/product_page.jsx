import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/header";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Complete_product from "../components/complete_product_card";
import ProductCard from '../components/product_card';
import Review from "../components/review";
import "../styles/pages/product.css";
import { useCookies } from "react-cookie";
import Edit_product from "../components/product_edit";

function Product() {
  const { codProduto } = useParams();
  const [cookies] = useCookies(['credentials'])
  const [produto, setProduto] = useState([]); // Definir o estado inicial como um vetor vazio
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/produto/codigo/${codProduto}`)
      .then((response) => response.json())
      .then((data) => setProduto(data)) // Atualizar o estado com os produtos retornados
      .catch((error) => console.log(error));
  }, [codProduto]);

  useEffect(() => {
    fetch('http://localhost:3000/produto')
      .then(response => response.json())
      .then(data => setProdutos(Object.values(data)))
      .catch(error => console.log(error));
  }, []);

  const tipoUsuarioLogado = () => {
    if (cookies.credentials)
      return cookies.credentials.tipo
  }

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
        {produto && produto.imagem ? (
          tipoUsuarioLogado() === 'adm' ? (
            <Edit_product
              key={produto.id}
              codigo={produto.codigo}
              nome={produto.nome}
              valor={produto.valor}
              quantidade_disponivel={produto.quantidade_disponivel}
              descricao={produto.descricao}
              imagem={`http://localhost:3000/${produto.imagem.replace("public/", "")}`}
            />
          ) : (
            <Complete_product
              key={produto.id}
              codigo={produto.codigo}
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

        {produtos.length > 3 && (
          <div id="avaliacao">
            <h2>Você também vai gostar de</h2>
            <div id='recomendacoes'>
              {shuffle(produtos, produto.id).slice(0, 3).map((produtoo) => (
                <ProductCard
                  key={produtoo.id}
                  codigo={produtoo.codigo}
                  nome={produtoo.nome}
                  quantidade_disponivel={produtoo.quantidade_disponivel}
                  valor={produtoo.valor}
                  descricao={produtoo.descricao}
                  imagem={`http://localhost:3000/${produtoo.imagem.replace("public/", "")}`}
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

export default Product;
