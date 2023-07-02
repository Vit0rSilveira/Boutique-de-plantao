import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import Header from "../components/header";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Puglin from "../components/puglin";
import Personal_data from "../components/personal_data";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../styles/pages/user.css";


function User() {
    // Estado para controlar o botão ativo
    const [activeButton, setActiveButton] = useState("");
    const [user, setUser] = useState([]);
    const [cookies, setCookies, removeCookies] = useCookies(["credentials"]);
    const navigate = useNavigate()

    useEffect(() => {
        if (!cookies.credentials)
            navigate("/login")
        else if (cookies.credentials.type === "adm")
            navigate("/adm")

        fetch(`http://localhost:3000/usuario/${cookies.credentials.email}`)
            .then((response) => response.json())
            .then((data) => setUser(data.cliente))
            .catch((error) => console.log(error));
    }, []);

    // Função para lidar com o clique nos botões
    const handleButtonClick = (buttonType) => {
        setActiveButton(buttonType);
    };

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

    const renderCardContent = () => {
        if (activeButton === "dados") {
            return <Personal_data user={user} />;
        } else if (activeButton === "excluir") {
            setActiveButton("")
            handlerDeleteAcount();
        } else if (user) {
            return (
                <div className="welcome-card">
                    <h2> {user.nome} Bem-vindo(a)!</h2>
                    <p>Aqui você pode ver seus dados cadastrais e altera - los.</p>
                </div>
            );
        } else {
            return (
                <div className="welcome-card">
                    <h2>Bem-vindo(a)!</h2>
                    <p>Aqui você pode ver seus dados cadastrais e altera - los.</p>
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
                <div id="page-user">
                    <div id="buttons-user">
                        <button className={"button-personal-page " + (activeButton === "dados" ? "active" : "")} onClick={() => handleButtonClick("dados")}>
                            Meus dados
                        </button>
                        <button className="dell-personal-page" onClick={() => handleButtonClick("excluir")}>
                            Excluir conta
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
