import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import Header from "../components/header";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Personal_data from "../components/personal_data";
import Novo_produto from "../components/new_product";


function User() {
    // Estado para controlar o botão ativo
    const [activeButton, setActiveButton] = useState("");
    const [users, setUsers] = useState([]);
    const [cookies] = useCookies(["credentials"]);
    const navigate = useNavigate()

    useEffect(() => {
        if (!cookies.credentials)
            navigate("/login")
        else if (cookies.credentials.type != "adm")
            navigate("/perfil")


        fetch("../jsons/clientes.json")
            .then((response) => response.json())
            .then((data) => setUsers(Object.values(data)))
            .catch((error) => console.log(error));


    }, [])

    const userLogin = cookies.credentials && cookies.credentials.login;
    const usuarioLogado = users.find((user) => user.login === userLogin);

    // Função para lidar com o clique nos botões
    const handleButtonClick = (buttonType) => {
        setActiveButton(buttonType);
    };

    /**
     * Função para renderizar o conteúdo com base no botão ativo
     */
    const renderCardContent = () => {
        if (activeButton === "dados") {
            return <Personal_data user={usuarioLogado} />;
        } else if (activeButton === "novo-adm") {
            return ( <div>
                <h3>Cadastrar novo administrador</h3>
                <Personal_data user={{ tipo: "adm" }} />
                </div>)
        } else if (activeButton === "novo-produto") {
            return (<Novo_produto/>)
        } else if (activeButton === "editar-produto") {
            return (<h1>editar-produto</h1>)
        }
        else if (usuarioLogado) {
            // Card de boas-vindas
            return (
                <div className="welcome-card">
                    <h2> {usuarioLogado.nome } Bem-vindo(a)!</h2>
                    <p>Selecione uma opção no menu para adicionar um novo administrador, editar um produto ou adicionar um novo produto</p>
                </div>
            );
        } else {
            return (
                <div className="welcome-card">
                    <h2>Bem-vindo(a)!</h2>
                    <p>Selecione uma opção no menu para visualizar seus dados ou histórico de compras.</p>
                </div>
            );
        }
    };

    return (
        <>
            <Header />
            <Navbar />
            <main>
                <div id="page-user">
                    <div id="buttons">
                        <button className={"button-adm-page " + (activeButton === "dados" ? "active" : "")} onClick={() => handleButtonClick("dados")}>
                            Meus dados
                        </button>
                        <button className={"button-adm-page " + (activeButton === "novo-adm" ? "active" : "")} onClick={() => handleButtonClick("novo-adm")}>
                            Cadastrar novo Administrador
                        </button>

                        <button className={"button-adm-page " + (activeButton === "novo-produto" ? "active" : "")} onClick={() => handleButtonClick("novo-produto")}>
                            Cadastrar novo produto
                        </button>

                        <button className={"button-adm-page " + (activeButton === "editar-produto" ? "active" : "")} onClick={() => handleButtonClick("editar-produto")}>
                            Editar um produto
                        </button>
                    </div>

                    <div id="card">{renderCardContent()}</div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default User;
