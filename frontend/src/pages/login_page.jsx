import React, { useState } from "react";
import bcrypt from "bcryptjs";
import Header from "../components/header";
import Navbar from "../components/navbar";
import Footer from '../components/footer';
import Puglin from "../components/puglin";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../styles/pages/login.css";

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
        const passwordMatches = await passwordsEqual(password, client.senha);

        if (passwordMatches) {
            setCookies("credentials", { email: client.email, tipo: client.tipo });

            if (client.tipo === "cliente") {
                navigate("/perfil");
            } else {
                navigate("/adm");
            }
        } else {
            toast.error("Usuário ou senha inválidos");
        }
    };

    function handleLoginClick() {
        const login = document.getElementById("input-email").value;
        const password = document.getElementById("input-password").value;
        fetch(`http://localhost:3000/usuario/${login}`)
            .then(response => response.json())
            .then(data => {
                const client = data.cliente;
                if (client) {
                    authenticateUser(client, password); // Passa a senha como argumento
                } else {
                    toast.error("Usuário não encontrado!");
                }
            })
            .catch(error => console.log(error));
    }

    return (
        <>
            <Puglin/>
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
