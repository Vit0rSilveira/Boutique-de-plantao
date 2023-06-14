import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import Header from "../components/header";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Personal_data from "../components/personal_data";
import History from "../components/purchase_history";
import "../styles/pages/user.css";
import {useNavigate } from "react-router-dom";


function User() {
    // Estado para controlar o botão ativo
    const [activeButton, setActiveButton] = useState("");
    const [users, setUsers] = useState([]);
    const [cookies] = useCookies(["credentials"]);
    const navigate = useNavigate()

    useEffect(() => {
        if (!cookies.credentials)
            navigate("/login")
        else if (cookies.credentials.type === "adm")
            navigate("/adm")

        fetch("../jsons/clientes.json")
            .then((response) => response.json())
            .then((data) => setUsers(Object.values(data)))
            .catch((error) => console.log(error));
    }, []);

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
        } else if (activeButton === "compras") {
            return usuarioLogado.historicoCompras.map((compra) => (
                <History dados={compra} key={compra.id} />
            ));
        } else if (usuarioLogado) {
            // Card de boas-vindas
            return (
                <div className="welcome-card">
                    <h2> {usuarioLogado.nome } Bem-vindo(a)!</h2>
                    <p>Selecione uma opção no menu para visualizar seus dados ou histórico de compras.</p>
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
                    <div id="buttons-user">
                        <button className={"button-personal-page " + (activeButton === "dados" ? "active" : "")} onClick={() => handleButtonClick("dados")}>
                            Meus dados
                        </button>
                        <button className={"button-personal-page " + (activeButton === "dados" ? "active" : "")} onClick={() => handleButtonClick("compras")}>
                            Histórico de Compras
                        </button>
                    </div>

                    <div id={activeButton === "dados" ? "user-card" : ""}>{renderCardContent()}</div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default User;
