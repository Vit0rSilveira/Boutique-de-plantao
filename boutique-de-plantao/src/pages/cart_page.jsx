import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Header from '../components/header';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Item from '../components/cart_item';
import "../styles/pages/cart_page.css";

function Cart() {
    const [itens, setItens] = useState([]);
    const [subtotal, setSubtotal] = useState(1);
    const [frete, setFrete] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('../jsons/carrinho.json')
            .then(response => response.json())
            .then(data => setItens(Object.values(data)))
            .catch(error => console.log(error));
    }, []);



    function handleShippingCost() {
        let cep = document.getElementById("input_cep").value;

        if (!cep) {
            setFrete(Math.floor(0));
            alert("Por favor, digite seu CEP");
            return;
        }

        setFrete(Math.floor(cep / 1000000));
    }

    function handlePayment() {
        let cep = document.getElementById("input_cep").value;
        if (!cep) {
            alert("Por favor, digite seu CEP");
            return;
        }
        if (!subtotal) {
            alert("Não há itens em seu carrinho");
            return;
        }
        navigate("/pagamento");
    }


    return (
        <>
            <Header />
            <Navbar />
            <main>
                <div id='cart'>
                    <h1>Meu Carrinho</h1>

                    {itens.length > 0 && (
                        <>
                            <Item
                                id = {itens[0].id}
                                nome={itens[0].nome}
                                quantidade_disponivel={itens[0].quantidade_disponivel}
                                valor={itens[0].valor}
                                imagem={itens[0].imagem}
                                quantidade_carrinho={itens[0].quantidade_carrinho}
                            />
                            <Item
                                id = {itens[1].id}
                                nome={itens[1].nome}
                                quantidade_disponivel={itens[1].quantidade_disponivel}
                                valor={itens[1].valor}
                                imagem={itens[1].imagem}
                                quantidade_carrinho={itens[1].quantidade_carrinho}
                            />
                            <Item
                                id = {itens[2].id}
                                nome={itens[2].nome}
                                quantidade_disponivel={itens[2].quantidade_disponivel}
                                valor={itens[2].valor}
                                imagem={itens[2].imagem}
                                quantidade_carrinho={itens[2].quantidade_carrinho}
                            />
                        </>
                    )}

                    <div id='bottom_info'>
                        <div id='shipping'>
                            <label htmlFor="input_cep">Digite seu CEP</label>
                            <input type="number" id="input_cep" />
                            <input type="submit" id="input_calculate_cep" value="Calcular Frete" onClick={handleShippingCost} />
                        </div>

                        <div id='total_cost'>
                            <div className='cost'>
                                <div>SUBTOTAL</div>
                                <div>R$ {subtotal}</div>
                            </div>
                            <div className='cost'>
                                <div>FRETE</div>
                                <div>R$ {frete}</div>
                            </div>
                            <div className='cost'>
                                <div>TOTAL</div>
                                <div>R$ {subtotal + frete}</div>
                            </div>
                        </div>
                    </div>

                    <input type="submit" id="continuar_compra" value="Continuar a compra" onClick={handlePayment} />
                </div>
            </main>


            <Footer />

        </>
    );
}

export default Cart;