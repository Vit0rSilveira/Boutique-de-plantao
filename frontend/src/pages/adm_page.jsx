import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Header from "../components/header";
import Navbar from "../components/navbar";
import Puglin from "../components/puglin";
import Footer from "../components/footer";
import Personal_data from "../components/personal_data";
import New_product from "../components/new_product";
import "../styles/pages/adm.css"


function User() {
    // Estado para controlar o botão ativo
    const [activeButton, setActiveButton] = useState("");
    const [user, setUser] = useState([]);
    const [cookies, setCookies, removeCookies] = useCookies(["credentials"]);
    const navigate = useNavigate()

    useEffect(() => {
        if (!cookies.credentials)
            navigate("/login")
        else if (cookies.credentials.tipo != "adm")
            navigate("/perfil")


        fetch(`http://localhost:3000/usuario/${cookies.credentials.email}`)
            .then((response) => response.json())
            .then((data) => setUser(data.cliente))
            .catch((error) => console.log(error));


    }, [])


    function handlerDeleteAcount() {
        fetch(`http://localhost:3000/usuario/${cookies.credentials.email}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                toast.success(data.message);
                setTimeout(() => {
                    removeCookies("credentials");
                    navigate("/");
                }, 2000);
            })
            .catch((error) => console.log(error));
    }

    // Função para lidar com o clique nos botões
    const handleButtonClick = (buttonType) => {
        setActiveButton(buttonType);
    };

    /**
     * Função para renderizar o conteúdo com base no botão ativo
     */
    const renderCardContent = () => {
        if (activeButton === "dados") {
            return <Personal_data user={user} update={true} />;
        } else if (activeButton === "novo-adm") {
            return (
                <div className="div-return-render">
                    <h3>Cadastrar novo administrador</h3>
                    <Personal_data user={{ tipo: "adm" }} update={false} />
                </div>)
        } else if (activeButton === "novo-produto") {
            return (
                <div className="div-return-render">
                    <h3>Cadastrar novo Produto</h3>
                    <New_product />
                </div>)
        } else if (activeButton === "excluir") {
            setActiveButton("")
            handlerDeleteAcount();
        }   else if (user) {
            // Card de boas-vindas
            return (
                <div className="welcome-card">
                    <h2> {user.nome} Bem-vindo(a)!</h2>
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
            <Puglin />
            <Header />
            <Navbar />
            <main>
                <div id="adm-user">
                    <div id="buttons">
                        <div>
                            <input type="button" value="Meus dados" className={"button-adm-page " + (activeButton === "dados" ? "active" : "")} onClick={() => handleButtonClick("dados")} />
                            <input type="button" value="Cadastrar Administrador" className={"button-adm-page " + (activeButton === "novo-adm" ? "active" : "")} onClick={() => handleButtonClick("novo-adm")} />
                        </div>
                        <div>
                            <input type="button" value="Cadastrar Produto" className={"button-adm-page " + (activeButton === "novo-produto" ? "active" : "")} onClick={() => handleButtonClick("novo-produto")} />
                            <input type="button" value="Excluir conta" className="dell-adm-page"  onClick={() => handleButtonClick("excluir")} />
                        </div>
                    </div>

                    <div className={activeButton === "" ? "" : "adm-card"}>{renderCardContent()}</div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default User;
