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
    return cookies.credentials.tipo
  }

  const produtoEncontrado = produtos.find(
    (produto) => produto.codigo === idProduto
  );

  return (
    <>
      <Header />
      <Navbar />

      <main>
        {produtoEncontrado ? (
          tipoUsuarioLogado() === 'adm' ? (
            <Edit_product
              id={idProduto}
              nome={produtoEncontrado.nome}
              valor={produtoEncontrado.valor}
              quantidade_disponivel={produtoEncontrado.quantidade_disponivel}
              descricao={produtoEncontrado.descricao}
              imagem={produtoEncontrado.imagem}
            />
          ) : (
            <Complete_product
              id={idProduto}
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

        {produtoEncontrado && produtoEncontrado.avaliacao.length > 0 && (
          <div id="avaliacao">
            <h2>Avaliações</h2>
            {produtoEncontrado.avaliacao.map((avaliacao) => (
              <Review
                key={avaliacao.id}
                nota={avaliacao.nota}
                comentario={avaliacao.comentario}
              />
            ))}
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}

export default Product;
