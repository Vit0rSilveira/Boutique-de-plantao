import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/components/payment_card.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Payment_card() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        nomeCartao: "",
        numeroCartao: "",
        cvv: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    }

    function handleSubmit() {
        const { nomeCartao, numeroCartao, cvv } = formData;


        if (!nomeCartao || numeroCartao.length < 4 || !cvv) {
            toast.error("Por favor, preencha todos os campos obrigatórios.");
            return;
        }

        localStorage.setItem("paymentMethod", `Cartão **** ${numeroCartao.slice(-4)}`)
        navigate("/sumario")
    }

    return (
        <div id="payment-card">
            <label htmlFor="nome-cartao">Nome</label>
            <input type="text" name="nomeCartao" id="nomeCartao" value={formData.nomeCartao} onChange={handleChange} />
            <label htmlFor="numero-cartao">Número do Cartão</label>
            <input type="text" name="numeroCartao" id="numeroCartao" value={formData.numeroCartao} onChange={handleChange} />
            <label htmlFor="cvv">Código de Segurança</label>
            <input type="text" name="cvv" id="cvv" value={formData.cvv} onChange={handleChange} />


            <input type="button" className="card-button" value="Confirmar" onClick={handleSubmit} />
            <ToastContainer />
        </div>
    );
}

export default Payment_card;