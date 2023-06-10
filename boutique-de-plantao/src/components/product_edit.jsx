import React, { useState } from "react";

function Edit_product(props) {
  const [nomeProduto, setNomeProduto] = useState(props.dados.nome);
  const [quantidade, setQuantidade] = useState(props.dados.quantidade);
  const [valor, setValor] = useState(props.dados.valor);

  const handleNomeProdutoChange = (event) => {
    setNomeProduto(event.target.value);
  };

  const handleQuantidadeChange = (event) => {
    setQuantidade(event.target.value);
  };

  const handleValorChange = (event) => {
    setValor(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode fazer algo com os valores atualizados
    console.log("Nome do Produto:", nomeProduto);
    console.log("Quantidade:", quantidade);
    console.log("Valor:", valor);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome-produto">Nome do Produto</label>
        <input
          type="text"
          id="nome-produto"
          value={nomeProduto}
          onChange={handleNomeProdutoChange}
        />

        <label htmlFor="quantidade">Quantidade</label>
        <input
          type="text"
          id="quantidade"
          value={quantidade}
          onChange={handleQuantidadeChange}
        />

        <label htmlFor="valor">Valor</label>
        <input
          type="text"
          id="valor"
          value={valor}
          onChange={handleValorChange}
        />

        <label htmlFor="imagem">Imagem</label>
        <img src={props.imagem} alt="Imagem do Produto" />

        <input type="submit" value="Salvar" id="button-cadastrar-adm" />
      </form>
    </>
  );
}

export default Edit_product;
