import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Header from '../components/header';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Item from '../components/cart_item';
import "../styles/pages/cart_page.css";

function Cart() {
    const [itens, setItens] = useState([]);
    const [subtotal, setSubtotal] = useState(0);
    const [frete, setFrete] = useState(0);
    const navigate = useNavigate();

    

    useEffect(() => {
        fetch('../jsons/carrinho.json')
            .then(response => response.json())
            .then(data => {
                const updatedItens = Object.values(data).map(item => ({ ...item, subtotal: item.valor * item.quantidade_carrinho }));
                setItens(updatedItens);
            })
            .catch(error => console.log(error));
    }, []);

    useEffect(() => {
        const newSubtotal = itens.reduce((total, item) => total + (item.subtotal || 0), 0);
        setSubtotal(newSubtotal);
    }, [itens]);
    
    function handlerCallback(valor, index) {
        setItens(prevItens => {
            const updatedItens = [...prevItens];
            updatedItens[index].subtotal = valor;
            return updatedItens;
        });
    }

    

    function handleShippingCost() {
        let cep = document.getElementById("input_cep").value;

        if (!cep) {
            setFrete(0);
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
                            {itens.map((item, index) => (
                                <Item
                                    key={item.id}
                                    nome={item.nome}
                                    quantidade_disponivel={item.quantidade_disponivel}
                                    valor={item.valor}
                                    imagem={item.imagem}
                                    quantidade_carrinho={item.quantidade_carrinho}
                                    onCallback={(valor) => handlerCallback(valor, index)}
                                />
                            ))}
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
                                <div>R$ {subtotal ? subtotal.toFixed(2) : '0.00'}</div>
                            </div>
                            <div className='cost'>
                                <div>FRETE</div>
                                <div>R$ {frete ? frete.toFixed(2) : '0.00'}</div>
                            </div>
                            <div className='cost'>
                                <div>TOTAL</div>
                                <div>R$ {(subtotal + frete).toFixed(2)}</div>
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
