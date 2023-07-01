import React, { useEffect, useState } from "react";
import Header from "../components/header"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import ProductCard from "../components/product_card";
import { useParams } from "react-router-dom";
import "../styles/pages/product_search.css";

function Search_product() {
    const { produto } = useParams()
    const [produtos, setProdutos] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/produto/${produto}`)
          .then((response) => response.json())
          .then((data) => setProdutos(data)) // Atualizar o estado com o objeto retornado
          .catch((error) => console.log(error));
      }, [produto]);

    console.log(produtos)

    const handler_produtos = () => {
        if (produtos.length === 0)
            return (<h1> Nenhum Produto Encontrado</h1>)
        else
            return produtos.map((item) => {
                return (<ProductCard
                key = {item.codigo}
                codigo = {item.codigo}
                nome = {item.nome}
                imagem = {`http://localhost:3000/${item.imagem.replace("public/", "")}`}
                valor = {item.valor}
                quantidade_disponivel = {item.quantidade_disponivel}
                />)
            })
    }
    return (
        <>
            <Header />
            <Navbar />
            <main>
                <div id="produtos-encontrados">
                    {handler_produtos()}
                </div>
            </main>
            <Footer />
        </>
    )

}

export default Search_product;