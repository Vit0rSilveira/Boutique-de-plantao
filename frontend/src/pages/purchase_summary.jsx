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
    const [body, setBody] = useState({})

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(itens));
    }, [itens]);

    useEffect(() => {
        const newSubtotal = itens.reduce((total, item) => total + (item.subtotal || 0), 0);
        setSubtotal(newSubtotal);
    }, [itens]);

    useEffect(() => {
        alert(cookies.credentials.email)
        if (!cookies.credentials || !cookies.credentials.email) {
          navigate("/login");
        } else if (cookies.credentials.tipo === "adm") {
          navigate("/adm");
        } else {
          fetch(`http://localhost:3000/usuario/${cookies.credentials.email}`)
            .then((response) => response.json())
            .then((data) => setUser(data.cliente))
            .catch((error) => console.log(error));
        }
      }, []);

    function handleInsertinDB(codProduto, body) {
        fetch(`http://localhost:3000/produto/${codProduto}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json" // Define o cabeçalho Content-Type
            },
            body: JSON.stringify(body),
        })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((err) => console.log(err));;
    }

    function handleUpdateAmount(codProduto, quantidadeVendida) {
        fetch(`http://localhost:3000/produto/codigo/${codProduto}`)
            .then((response) => response.json())
            .then((data) => {
                setBody(data);
                body.quantidade_disponivel = data.quantidade_disponivel - quantidadeVendida
                handleInsertinDB(codProduto, body)
            })
            .catch((error) => console.log(error));
    }

    function handlePurchase() {
        const localStorageItems = itens;

        localStorageItems.forEach(element => {
            handleUpdateAmount(element.codigo, element.quantidade_carrinho)
        });
        localStorage.clear()

        navigate("/obrigado");
    }

    if (Object.keys(user).length === 0) return <>Carregando...</>;

    const frete = Math.floor((user.cep).slice(0, 2));

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