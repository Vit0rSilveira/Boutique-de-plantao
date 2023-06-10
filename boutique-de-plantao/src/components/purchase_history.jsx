import React, { useEffect, useState } from "react";
import { format } from 'date-fns';
import "../styles/components/purchase_history.css"

function History(props) {
    const [produtos, setProdutos] = useState({});

    useEffect(() => {
        fetch('../jsons/flores.json')
            .then(response => response.json())
            .then(data => setProdutos(Object.values(data)))
            .catch(error => console.log(error));
    }, []);

    if (!Array.isArray(produtos)) {
        return <p>Nenhum produto encontrado.</p>;
    }

    const produtoRenderizado = produtos.find(produto => produto.id == props.dados.id);
    const dataFormatada = format(new Date(props.dados.data), 'dd/MM/yyyy');

    return (
        <div id="historico-compra">
            <div className="pais">
                <img src={produtoRenderizado.imagem} alt="" />
            </div>
            <div className="pais">
                <p>Número</p>
                <p>{props.dados.numero}</p>
            </div>
            <div className="pais">
                <p>Produto</p>
                <p>{produtoRenderizado.nome}</p>
            </div>
            <div className="pais">
                <p>Data da Compra</p>
                <p>{dataFormatada}</p>
            </div>
            <div className="pais">
                <p>Valor</p>
                <p>{props.dados.valorFinal}</p>
            </div>
            <div className="pais">
                <p>Status</p>
                <p>{props.dados.status}</p>
            </div>
            <div className="pais">
                <p>Forma de pagamento</p>
                <p>{props.dados.formaPagamento}</p>
            </div>
        </div>
    );
}

export default History;
