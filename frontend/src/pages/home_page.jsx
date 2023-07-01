import React, { useState, useEffect } from 'react';
import Images_carousel from '../components/carousel';
import Header from '../components/header';
import Navbar from '../components/navbar';
import Product from '../components/product_card';
import Footer from '../components/footer';
import "../styles/pages/home.css";

function Home() {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/produto')
            .then(response => response.json())
            .then(data => setProdutos(Object.values(data)))
            .catch(error => console.log(error));
    }, []);

    return (
        <>
            <Header />
            <Navbar />
            <main>
                <Images_carousel />
                
                <h1>Mais vendidos</h1>
                <div className='container-home'>
                    {produtos.length > 0 && (
                        <>
                            {produtos.slice(0, 3).map((produto, index) => (
                                <Product
                                    key={index}
                                    codigo={produto.codigo}
                                    nome={produto.nome}
                                    quantidade_disponivel={produto.quantidade_disponivel}
                                    valor={produto.valor}
                                    descricao={produto.descricao}
                                    imagem={`http://localhost:3000/${produto.imagem.replace("public/", "")}`}
                                />
                            ))}
                        </>
                    )}
                   </div>

                
                <h1>Promoções</h1>
                <div className='container-home'>
                    {produtos.length > 0 && (
                        <>
                            {produtos.slice(-3).map((produto, index) => (
                                <Product
                                    key={index}
                                    codigo={produto.codigo}
                                    nome={produto.nome}
                                    quantidade_disponivel={produto.quantidade_disponivel}
                                    valor={produto.valor}
                                    descricao={produto.descricao}
                                    imagem={`http://localhost:3000/${produto.imagem.replace("public/", "")}`}
                                />
                            ))}
                        </>
                    )}
                </div>
            </main>

            <Footer />
        </>
    );
}

export default Home;
