import React from "react";
import Header from '../components/header.jsx';
import Navbar from '../components/navbar.jsx';
import Footer from '../components/footer';
import "../styles/pages/about_us.css";

function About_us() {
    return (
        <>
            <Header />
            <Navbar />
            <main>
                <div id="bem-vindo">
                    <h1>Bem-vindo(a) à Boutique de Plantão!</h1>
                    <p>
                        Somos uma loja online especializada em plantas e produtos para jardinagem.
                        Oferecemos uma ampla variedade de plantas de alta qualidade, desde suculentas e cactos
                        até samambaias e árvores frutíferas, além de diversos acessórios e insumos para cuidar e decorar o seu jardim.
                    </p>

                    <p>
                        Nossa equipe é formada por especialistas em jardinagem, que estão sempre disponíveis para ajudá-lo(a) a escolher as melhores plantas e produtos de acordo com as suas necessidades e preferências.
                    </p>
                    <p>
                        Na Boutique de Plantão, acreditamos que o contato com a natureza é fundamental para a saúde e o
                        bem-estar, e por isso, buscamos oferecer uma experiência única aos nossos clientes, desde a escolha das plantas
                        até a entrega em sua casa.
                    </p>

                    <p>Navegue pelo nosso site e descubra como podemos ajudá-lo(a)</p>
                    <p>a tornar o seu jardim ainda mais bonito e saudável!</p>
                </div>

                <div id="compromisso-ambiental">
                    <h1>Compromisso Ambiental</h1>
                    <p>
                        A Boutique de Plantão se preocupa com o meio ambiente e está comprometida em minimizar seu impacto ambiental
                        em todas as operações. Para isso, adotamos as seguintes práticas:
                    </p>
                    <ul>
                        <li>Uso de embalagens recicláveis e biodegradáveis</li>
                        <li>Oferecimento de produtos orgânicos e sustentáveis</li>
                        <li>Uso de transporte com baixa emissão de carbono para entrega de produtos</li>
                        <li>Redução do consumo de energia em nossas instalações</li>
                        <li>Doações para organizações ambientais para contribuir com a preservação e conservação da natureza</li>
                        <li>Estamos sempre em busca de maneiras de melhorar nossas práticas e sermos cada vez mais sustentáveis</li>
                        <li>Acreditamos que é nossa responsabilidade fazer a diferença positiva no mundo, preservando a natureza e incentivando nossos clientes a viver de maneira mais sustentável</li>
                    </ul>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default About_us;
