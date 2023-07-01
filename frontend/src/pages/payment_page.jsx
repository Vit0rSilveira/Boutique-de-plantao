import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Header from '../components/header';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import "../styles/pages/payment_page.css"

function Payment() {
    const navigate = useNavigate()
    
    const handlePaymentMethod = (paymentMethod) => {
        if (paymentMethod == 'Cartão'){
            navigate("/cartao")
        }
        else {
            localStorage.setItem("paymentMethod", paymentMethod);
            navigate("/sumario");
        }
    }
    
    return (
        <>
            <Header />
            <Navbar />
            <main>
                <div id='page-payment'>
                    <h1>Escolha a forma de pagamento</h1>
                    <input type="button"value="Cartão" className="new-card-payment" onClick={() => handlePaymentMethod('Cartão')}/>
                    <input type="button" value="Pix" className="pix-payment" onClick={() => handlePaymentMethod('Pix')}/>
                    <input type="button" value="Boleto" className="boleto-payment" onClick={() => handlePaymentMethod('Boleto bancário')}/>
                </div>
            </main>
            <Footer />

        </>
    );
}

export default Payment;