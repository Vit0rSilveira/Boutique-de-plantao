import React, { useState } from "react";
import Header from "../components/header";
import Navbar from "../components/navbar";
import Footer from '../components/footer';
import bcrypt from "bcryptjs";
import "../styles/pages/login.css";
import { useCookies } from "react-cookie";
import "../styles/pages/login.css";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const [cookies, setCookies, removeCookies] = useCookies(["credentials"]);

    const passwordsEqual = async (password, passwordBD) => {
        try {
            const result = await bcrypt.compare(password, passwordBD);
            return result;
        } catch (error) {
            console.error(error);
            return false;
        }
    };

    const authenticateUser = async (client, password) => {
        console.log(client)
        console.log(password)
        console.log(client)
        const passwordMatches = await passwordsEqual(password, client.senha);

        if (passwordMatches) {
            setCookies("credentials", { email: client.email, tipo: client.tipo });

            if (client.tipo === "cliente") {
                navigate("/perfil");
            } else {
                navigate("/adm");
            }
        } else {
            setTimeout(() => {
                alert("Usuário ou senha incorretos");
            }, 0);
        }
    };

    function handleLoginClick() {
        const login = document.getElementById("input-email").value;
        const password = document.getElementById("input-password").value;
        fetch(`http://localhost:3000/usuario/${login}`)
            .then(response => response.json())
            .then(data => {
                const client = data;
                if (client) {
                    authenticateUser(client, password); // Passa a senha como argumento
                } else {
                    setTimeout(() => {
                        alert("Usuário não encontrado");
                    }, 0);
                }
            })
            .catch(error => console.log(error));
    }

    return (
        <>
            <Header />
            <Navbar />

            <main>
                <div id="login">
                    <h1 className="tittle">Login</h1>

                    <div className="boxes-inputs form ">
                        <form action="">
                            <label htmlFor="input-email">E-mail</label>
                            <input type="email" id="input-email" />
                            <label htmlFor="input-password">Senha</label>
                            <input type="password" id="input-password" />
                            <input type="button" className="login-button" value="Continuar" onClick={handleLoginClick} />
                        </form>
                    </div>
                    <input type="button" className="login-button" value="Cadastre-se" onClick={() => { navigate("/cadastrar") }} />

                </div>
            </main>

            <Footer />
        </>
    );
}

export default Login;
