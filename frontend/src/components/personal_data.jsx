import React, { useEffect, useState } from "react";
import "../styles/components/personal_data.css";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";
import Puglin from "./puglin";

function Personal_data(props) {
  const [cookies, setCookies, removeCookies] = useCookies(["credentials"]);
  const { user: tipo } = props;
  const navigate = useNavigate();
  const [metodo, setMetodo] = useState("POST")
  const [urlreq, setUrlreq] = useState("http://localhost:3000/usuario")


  const [formData, setFormData] = useState({
    nome: tipo?.nome || "",
    tel: tipo?.tel || "",
    email: tipo?.email || "",
    senha: "",
    confirmacaoSenha: "",
    endereco: tipo?.endereco || "",
    cep: tipo?.cep || "",
    estado: tipo?.estado || "",
    cidade: tipo?.cidade || "",
    bairro: tipo?.bairro || "",
    complemento: tipo?.complemento || "",
    tipo: tipo?.tipo || "cliente"
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  useEffect(() => {
    if (cookies.credentials && (cookies.credentials.tipo === "cliente" || props.update)) {
      setMetodo("PATCH")
      setUrlreq(`http://localhost:3000/usuario/${cookies.credentials.email}`)
    }

    else {
      setMetodo("POST")
      setUrlreq("http://localhost:3000/usuario")
    }
  }, [])

  function handlerRegister() {
    const {
      nome,
      tipo,
      tel,
      email,
      senha,
      confirmacaoSenha,
      endereco,
      cep,
      estado,
      cidade,
      bairro,
      complemento,
    } = formData;

    if (
      !nome ||
      !tel ||
      !email ||
      !senha ||
      !confirmacaoSenha ||
      !endereco ||
      !cep ||
      !estado ||
      !cidade ||
      !bairro
    ) {
      toast.error("Por favor, preencha todos os campos obrigatórios.");
      return;
    } else if (senha !== confirmacaoSenha) {
      toast.error("As senhas não coincidem");
      return;
    }


    const requestBody = formData;

    fetch(urlreq, {
      method: metodo,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 422) {
          toast.error(data.message);
        } else {
          toast.success(data.message);
          setCookies("credentials", { email: formData.email, tipo: formData.tipo });
          setTimeout(() => {
            navigate("/")
          }, 3000)
        }
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
  }

  return (
    <>
      <Puglin />

      <form action="">
        <div id="dados-pessoais">
          <label htmlFor="nome-completo">Nome Completo</label>
          <input type="text" name="nome" id="nome-completo" value={formData.nome} onChange={handleChange} />
          <label htmlFor="telefone">Telefone</label>
          <input type="text" name="tel" id="telefone" value={formData.tel} onChange={handleChange} required />
          <label htmlFor="">E-mail</label>
          <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} />
          <label htmlFor="senha">Senha</label>
          <input type="password" name="senha" id="senha" placeholder="Senha" value={formData.senha} onChange={handleChange} />
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
          <input type="text" name="endereco" id="input-endereco" value={formData.endereco} onChange={handleChange} />
          <label htmlFor="cep">CEP</label>
          <input type="text" name="cep" id="cep" value={formData.cep} onChange={handleChange} />
          <label htmlFor="estado">Estado</label>
          <input type="text" name="estado" id="estado" value={formData.estado} onChange={handleChange} />
          <label htmlFor="cidade">Cidade</label>
          <input type="text" name="cidade" id="cidade" value={formData.cidade} onChange={handleChange} />
          <label htmlFor="bairro">Bairro</label>
          <input type="text" name="bairro" id="bairro" value={formData.bairro} onChange={handleChange} />
          <label htmlFor="complemento">Complemento</label>
          <input type="text" name="complemento" id="complemento" value={formData.complemento} onChange={handleChange} />
        </div>

        <div className="button-wrapper">
          <input type="button" className="login-button" value="Cadastrar" onClick={handlerRegister} />
        </div>
      </form>
    </>
  );
}

export default Personal_data;
