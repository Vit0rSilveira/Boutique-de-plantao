import React from "react";
import { useState } from "react";
import { useCookies } from "react-cookie";
import Header from "../components/header";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../styles/pages/register.css";


function Register() {
    const [formData, setFormData] = useState({});
    const [cookies, setCookies, removeCookies] = useCookies(["credentials"]);

    function handlerRegister() {
        const nomeCompleto = document.getElementById('nome-completo').value;
        const telefone = document.getElementById('telefone').value;
        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;
        const confirmacaoSenha = document.getElementById('confirmacao-senha').value;
        const endereco = document.getElementById('input-endereco').value;
        const numero = document.getElementById('numero').value;
        const cep = document.getElementById('cep').value;
        const estado = document.getElementById('estado').value;
        const cidade = document.getElementById('cidade').value;
        const bairro = document.getElementById('bairro').value;
        let tipo = 'cliente'

        if (cookies.credentials)
            tipo = 'adm'
            

        if (!nomeCompleto || !telefone || !email || !senha || !confirmacaoSenha || !endereco || !numero || !cep || !estado ||
            !cidade || !bairro) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }
        else if (senha != confirmacaoSenha) {
            alert("As senhas não coecidem")
            return
        }

        const formData = {
            nomeCompleto, telefone, email, senha, confirmacaoSenha, endereco, numero, cep, estado, cidade, bairro, tipo
        };

        setFormData(formData);      
    }

    return (
        <>
            <Header />
            <Navbar />

            <main>
                <h1>Cadastro</h1>
                <div id="formulario">
                    <form action="">
                        <div id="dados-pessoais">
                            <label htmlFor="nome-completo">Nome Completo</label>
                            <input type="text" name="nome-completo" id="nome-completo" placeholder="Nome Completo" />
                            <label htmlFor="telefone">Telefone</label>
                            <input type="text" name="telefone" id="telefone" placeholder="(XX) XXXXXXXXX" required />
                            <label htmlFor="">E-mail</label>
                            <input type="email" name="email" id="email" placeholder="e-mail" />
                            <label htmlFor="senha">Senha</label>
                            <input type="password" name="senha" id="senha" placeholder="Senha" />
                            <label htmlFor="confirmacao-senha">Confirme sua Senha</label>
                            <input type="password" name="confirmacao-senha" id="confirmacao-senha" placeholder="Confirme sua Senha" />
                        </div>

                        <div id="endereco">
                            <label htmlFor="endereco">Endereço</label>
                            <input type="text" name="endereco" id="input-endereco" />
                            <label htmlFor="numero">Numero</label>
                            <input type="text" name="numero" id="numero" />
                            <label htmlFor="cep">CEP</label>
                            <input type="text" name="cep" id="cep" placeholder="CEP" />
                            <label htmlFor="estado">Estado</label>
                            <input type="text" name="estado" id="estado" placeholder="Estado" />
                            <label htmlFor="cidade">Cidade</label>
                            <input type="text" name="cidade" id="cidade" />
                            <label htmlFor="bairro">Bairro</label>
                            <input type="text" name="bairro" id="bairro" placeholder="Bairro" />
                            <label htmlFor="complemento">Complemento</label>
                            <input type="text" name="complemento" id="complemento" placeholder="Complemento (opcional)" />
                        </div>

                    </form>
                    <input type="button" value="Cadastrar" onClick={handlerRegister} />
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Register