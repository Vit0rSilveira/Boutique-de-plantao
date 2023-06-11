import React, { useEffect, useState } from "react";
import Header from "../components/header"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Product from "../components/product_card";
import { useParams } from "react-router-dom";
import "../styles/pages/product_search.css";


function Search_product() {
    const { produto } = useParams()
    const [produtos, setProdutos] = useState([])

    useEffect(() => {
        fetch('../jsons/flores.json')
            .then(response => response.json())
            .then(data => setProdutos(Object.values(data)))
            .catch(error => console.log(error))

    }, [])

    const produtosFiltrados = produtos.filter((item) => {
        return item.categoria.toLowerCase() === produto.toLowerCase() || item.nome.toLowerCase().includes(produto.toLowerCase());
    });

    const handler_produtos = () => {
        if (produtosFiltrados.length === 0)
            return (<h1> Nenhum Produto Encontrado</h1>)
        else
            return produtosFiltrados.map((item) => {
                return (<Product 
                id = {item.id}
                nome = {item.nome}
                imagem = {item.imagem}
                valor = {item.valor}
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