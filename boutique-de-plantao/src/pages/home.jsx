import React, {useState, useEffect} from 'react';
import Images_carousel from '../components/carousel';
import Header from '../components/header';
import Navbar from '../components/navbar';
import Product from '../components/product_card';
import Complete_product from '../components/complete_product_card'
import Review from '../components/review';

function Home() {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        fetch('../flores.json')
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
                        key={produtos[3].id}
                        name={produtos[3].nome}
                        amount_free={produtos[3].quantidade_disponivel}
                        value={produtos[3].valor}
                        descricao={produtos[3].descricao}
                        image={produtos[3].imagem}
                        avaliacao={produtos[3].avaliacao}
                    />
                </>
            )}
            <Review star = {5} comenter={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum omnis beatae iusto cumque culpa similique asperiores maxime necessitatibus laborum, consequatur quas! Numquam quidem, aliquid nam illo mollitia doloremque consectetur atque."}/>
            
        </>
    );
}

export default Home;