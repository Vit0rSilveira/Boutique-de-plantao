import React from "react";

function Novo_produto() {
    return (
        <>
            <form action="">
                <label htmlFor="nome-produto">Nome do Produto</label>
                <input type="text" id="nome-produto"/>
                <label htmlFor="id">Id produto</label>
                <input type="text" id="id"/>
                <label htmlFor="descricao">Descrição</label>
                <textarea name="descricao" id="descricao" cols="35" rows="3"></textarea>
                <label htmlFor="quantidade">Quantidade</label>
                <input type="text" id="quantidade"/>
                <label htmlFor="valor">Valor</label>
                <input type="text" id="quantidade"/>
            </form>
        </>
    )
}

export default Novo_produto