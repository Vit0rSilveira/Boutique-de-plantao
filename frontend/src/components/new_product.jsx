import React from "react";

function New_product() {
    return (
        <>
            <form action="">
                <label htmlFor="nome-produto">Nome do Produto</label>
                <input type="text" id="nome-produto"/>
                <label htmlFor="cod">Código do produto</label>
                <input type="text" id="cod"/>
                <label htmlFor="categoria">Categoria</label>
                <input type="text" id="categoria"/>
                <label htmlFor="descricao">Descrição</label>
                <textarea name="descricao" id="descricao" cols="35" rows="3"></textarea>
                <label htmlFor="quantidade">Quantidade</label>
                <input type="text" id="quantidade"/>
                <label htmlFor="valor">Valor</label>
                <input type="text" id="quantidade"/>
                <label htmlFor="imagem">Imagem</label>
                <input type="file" name="imagem" id="imagem" />
                <input type="button" value="Cadastrar" id="button-cadastrar-adm"/>
            </form>
        </>
    )
}

export default New_product