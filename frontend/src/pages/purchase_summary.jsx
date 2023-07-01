import React, { useState, useEffect } from 'react';
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import Header from '../components/header';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Item from '../components/cart_item';
import "../styles/pages/summary.css"

function Payment() {
    const [itens, setItens] = useState(() => {
        const storedItems = localStorage.getItem("cartItems");
        return storedItems ? JSON.parse(storedItems) : [];
    });
    const [user, setUser] = useState([]);
    const [subtotal, setSubtotal] = useState(0);
    const [cookies] = useCookies(["credentials"]);
    const navigate = useNavigate();
    
    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(itens));
    }, [itens]);

    useEffect(() => {
        const newSubtotal = itens.reduce((total, item) => total + (item.subtotal || 0), 0);
        setSubtotal(newSubtotal);
    }, [itens]);

    useEffect(() => {
        if (!cookies.credentials)
            navigate("/login")

        fetch(`http://localhost:3000/usuario/${cookies.credentials.email}`)
            .then((response) => response.json())
            .then((data) => setUser(data))
            .catch((error) => console.log(error));
    
    }, [])

    function handlePurchase() {
        localStorage.clear()
        navigate("/obrigado");
    }

    if (Object.keys(user).length === 0) return <>Carregando...</>;

    const frete = Math.floor((user.cep).replace(/-/g, "") / 1000000);

    return (
        <>
            <Header />
            <Navbar />
            <main>
                <div id="summary">
                    <h1>Resumo da Compra</h1>

                    <div className='secao'>
                        <h2>Endereço</h2>
                        <div id="personal-data">
                            <h3> {user.endereco} {user.complemento}</h3>
                            <h4> {user.cep} - {user.bairro}</h4>
                            <h4>{user.cidade} - {user.estado}</h4>
                            <h4>{user.nome} - {user.telefone}</h4>
                        </div>
                    </div>
                    
                    <div className='secao'>
                        <h2>Forma de Pagamento</h2>
                        <div id="payment-method">
                            <h4>{localStorage.getItem("paymentMethod")}</h4>
                        </div>
                    </div>

                    <div className='secao' id='confirmation'>
                        <h2>Confirme sua Compra</h2>
                        <div id="verify-purchase">
                        <div className='cost'>
                                    <div>SUBTOTAL</div>
                                    <div>R$ {subtotal.toFixed(2)}</div>
                                </div>
                                <div className='cost'>
                                    <div>FRETE</div>
                                    <div>R$ {frete.toFixed(2)}</div>
                                </div>
                                <div className='cost'>
                                    <div>TOTAL</div>
                                    <div>R$ {(subtotal + frete).toFixed(2)}</div>
                                </div>
                        </div>
                    </div>
                                
                    <input type="submit" id="confirm-purchase" value="Confirmar" onClick={handlePurchase} />


                </div>
                
            </main>
            <Footer />

        </>
    );
}

export default Payment;