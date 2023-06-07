import React from "react";
import Header from "../components/header";
import Navbar from "../components/navbar";
import "../styles/pages/login.css";
import { useCookies } from "react-cookie";

function Login() {
    const [cookies, setCookies, removeCookies] = useCookies(["user"]);

    const handleLoginClick = () => {
        setCookies("user", "AAAA")
    }

    return (
        <div id="login-page">
            <Header />
            <Navbar />
            <div id="login">
                <div className="boxes-inputs">
                    <h1>Login</h1>
                    <input type="button" value="Cadastre-se" />
                </div>

                <div className="boxes-inputs">
                    <form action="">
                        <label htmlFor="input-email">E-mail</label>
                        <input type="email" id="input-email" />
                        <label htmlFor="input-password">Senha</label>
                        <input type="password" id="input-password" />
                        <input type="submit" value="Continuar" onClick={handleLoginClick}/>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
