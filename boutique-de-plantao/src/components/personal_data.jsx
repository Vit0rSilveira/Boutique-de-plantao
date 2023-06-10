import React, { useState } from "react";
import "../styles/components/personal_data.css";

function Personal_data(props) {
  const { user: tipo } = props;

  const [formData, setFormData] = useState({
    nomeCompleto: tipo?.nome || "",
    telefone: tipo?.telefone || "",
    email: tipo?.email || "",
    senha: "",
    confirmacaoSenha: "",
    endereco: tipo?.endereco || "",
    cep: tipo?.cep || "",
    estado: tipo?.estado || "",
    cidade: tipo?.cidade || "",
    bairro: tipo?.bairro || "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handlerRegister() {
    const { nomeCompleto, telefone, email, senha, confirmacaoSenha, endereco, cep, estado, cidade, bairro,
    } = formData;

    if ( !nomeCompleto || !telefone || !email || !senha || !confirmacaoSenha ||
       !endereco || !cep || !estado || !cidade || !bairro) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    } else if (senha !== confirmacaoSenha) {
      alert("As senhas não coincidem");
      return;
    }

    setFormData((prevState) => ({
      ...prevState,
      user: tipo,
    }));
  }

  return (
    <form action="">
      <div id="dados-pessoais">
        <label htmlFor="nome-completo">Nome Completo</label>
        <input
          type="text"
          name="nomeCompleto"
          id="nome-completo"
          value={formData.nomeCompleto}
          onChange={handleChange}
        />
        <label htmlFor="telefone">Telefone</label>
        <input
          type="text"
          name="telefone"
          id="telefone"
          value={formData.telefone}
          onChange={handleChange}
          required
        />
        <label htmlFor="">E-mail</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
        />
        <label htmlFor="senha">Senha</label>
        <input
          type="password"
          name="senha"
          id="senha"
          placeholder="Senha"
          value={formData.senha}
          onChange={handleChange}
        />
        <label htmlFor="confirmacao-senha">Confirme sua Senha</label>
        <input
          type="password"
          name="confirmacaoSenha"
          id="confirmacao-senha"
          placeholder="Confirme sua Senha"
          value={formData.confirmacaoSenha}
          onChange={handleChange}
        />
      </div>

      <div id="endereco">
        <label htmlFor="endereco">Endereço</label>
        <input
          type="text"
          name="endereco"
          id="input-endereco"
          value={formData.endereco}
          onChange={handleChange}
        />
        <label htmlFor="cep">CEP</label>
        <input
          type="text"
          name="cep"
          id="cep"
          value={formData.cep}
          onChange={handleChange}
        />
        <label htmlFor="estado">Estado</label>
        <input
          type="text"
          name="estado"
          id="estado"
          value={formData.estado}
          onChange={handleChange}
        />
        <label htmlFor="cidade">Cidade</label>
        <input
          type="text"
          name="cidade"
          id="cidade"
          value={formData.cidade}
          onChange={handleChange}
        />
        <label htmlFor="bairro">Bairro</label>
        <input
          type="text"
          name="bairro"
          id="bairro"
          value={formData.bairro}
          onChange={handleChange}
        />
        <label htmlFor="complemento">Complemento</label>
        <input
          type="text"
          name="complemento"
          id="complemento"
          value={formData.complemento}
          onChange={handleChange}
        />
      </div>

      <div className="button-wrapper">
        <input type="button" className ="login-button" value="Cadastrar" onClick={handlerRegister} />
      </div>
    </form>
  );
}

export default Personal_data;
