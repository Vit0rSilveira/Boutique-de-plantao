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
        <>
            <Header />
            <Navbar />

            <div id="login-page">
                <div id="login">
                    <h1>Login</h1>

                    <div className="boxes-inputs form ">
                        <form action="">
                            <label htmlFor="input-email">E-mail</label>
                            <input type="email" id="input-email" />
                            <label htmlFor="input-password">Senha</label>
                            <input type="password" id="input-password" />
                            <input type="submit" value="Continuar" onClick={handleLoginClick} />
                        </form>
                    </div>

                    <input type="button" value="Cadastre-se" />
                </div>
            </div>
        </>

    );
}

export default Login;
