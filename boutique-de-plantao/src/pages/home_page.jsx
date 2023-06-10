import React, { useState, useEffect } from 'react';
import Images_carousel from '../components/carousel';
import Header from '../components/header';
import Navbar from '../components/navbar';
import Product from '../components/product_card';
import Complete_product from '../components/complete_product_card'
import Review from '../components/review';
import Footer from '../components/footer';
import Item from '../components/cart_item';

function Home() {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        fetch('../jsons/flores.json')
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
                {produtos.length > 0 && (
                    <>
                        <Product
                            key = {1}
                            id = {produtos[2].id}
                            nome={produtos[2].nome}
                            quantidade_disponivel={produtos[2].quantidade_disponivel}
                            valor={produtos[2].valor}
                            descricao={produtos[2].descricao}
                            imagem={produtos[2].imagem}
                            avaliacao={produtos[2].avaliacao}
                        />

                        <Product
                            key = {2}
                            id = {produtos[0].id}
                            nome={produtos[0].nome}
                            quantidade_disponivel={produtos[0].quantidade_disponivel}
                            valor={produtos[0].valor}
                            descricao={produtos[0].descricao}
                            imagem={produtos[0].imagem}
                            avaliacao={produtos[0].avaliacao}
                        />

                        <Product
                            key = {3}
                            id = {produtos[0].id}
                            nome={produtos[3].nome}
                            quantidade_disponivel={produtos[3].quantidade_disponivel}
                            valor={produtos[3].valor}
                            descricao={produtos[3].descricao}
                            imagem={produtos[3].imagem}
                            avaliacao={produtos[3].avaliacao}
                        />

                        <Item
                            amount_free = {produtos[2].quantidade_disponivel}
                            image={produtos[2].imagem}
                            name = {produtos[2].nome}
                            value = {produtos[2].valor}  
                        />
                    </>
                )}
            </main>


            <Footer />

        </>
    );
}

export default Home;