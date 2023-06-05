import React, {useState, useEffect} from 'react';
import Images_carousel from '../components/carousel';
import Header from '../components/header';
import Navbar from '../components/navbar';
import Product from '../components/product_card';
import Complete_product from '../components/complete_product_card'

function Home() {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        fetch('../produtos.json')
            .then(response => response.json())
            .then(data => setProdutos(Object.values(data)))
            .catch(error => console.log(error));
    }, []);

    console.log(produtos);

    return (
        <>
            <Header />
            <Navbar />
            <Images_carousel />
            {produtos.length > 0 && (
                <>
                    <Product
                        name={produtos[0].nome}
                        value={produtos[0].valor}
                        image={produtos[0].imagem}
                    />
                    
                    <Complete_product
                        key={produtos[1].id}
                        name={produtos[1].nome}
                        amount_free={produtos[1].quantidade_disponivel}
                        value={produtos[1].valor}
                        descricao={produtos[1].descricao}
                        image={produtos[1].imagem}
                        avaliacao={produtos[1].avaliacao}
                    />
                </>
            )}
        </>
    );
}

export default Home;