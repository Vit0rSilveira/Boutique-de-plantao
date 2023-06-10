import React, { useState } from "react";
import { useCookies } from "react-cookie";
import "../styles/components/personal_data.css"

function Personal_data(props) {
    const { user } = props;

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
        <form action="">
            <div id="dados-pessoais">
                <label htmlFor="nome-completo">Nome Completo</label>
                <input
                    type="text"
                    name="nome-completo"
                    id="nome-completo"
                    placeholder={user?.nome || "Nome Completo"} />
                <label htmlFor="telefone">Telefone</label>
                <input
                    type="text"
                    name="telefone"
                    id="telefone"
                    placeholder={user?.telefone || "(XX) XXXXXXXXX"}
                    required />
                <label htmlFor="">E-mail</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder={user?.email || "e-mail"} />
                <label htmlFor="senha">Senha</label>
                <input type="password" name="senha" id="senha" placeholder="Senha" />
                <label htmlFor="confirmacao-senha">Confirme sua Senha</label>
                <input
                    type="password"
                    name="confirmacao-senha"
                    id="confirmacao-senha"
                    placeholder="Confirme sua Senha" />
            </div>

            <div id="endereco">
                <label htmlFor="endereco">Endereço</label>
                <input
                    type="text"
                    name="endereco"
                    id="input-endereco"
                    placeholder={user?.endereco || "Endereço"} />
                <label htmlFor="numero">Numero</label>
                <input
                    type="text"
                    name="numero"
                    id="numero"
                    placeholder={user?.numero || "Número"} />
                <label htmlFor="cep">CEP</label>
                <input
                    type="text"
                    name="cep"
                    id="cep"
                    placeholder={user?.cep || "CEP"} />
                <label htmlFor="estado">Estado</label>
                <input
                    type="text"
                    name="estado"
                    id="estado"
                    placeholder={user?.estado || "Estado"} />
                <label htmlFor="cidade">Cidade</label>
                <input
                    type="text"
                    name="cidade"
                    id="cidade"
                    placeholder={user?.cidade || "Cidade"} />
                <label htmlFor="bairro">Bairro</label>
                <input
                    type="text"
                    name="bairro"
                    id="bairro"
                    placeholder={user?.bairro || "Bairro"} />
                <label htmlFor="complemento">Complemento</label>
                <input
                    type="text"
                    name="complemento"
                    id="complemento"
                    placeholder={user?.complemento || "Complemento (opcional)"} />
            </div>

            <div className="button-wrapper">
                <input type="button" value="Cadastrar" onClick={handlerRegister}/>
            </div>
        </form>
    );
}

export default Personal_data;
