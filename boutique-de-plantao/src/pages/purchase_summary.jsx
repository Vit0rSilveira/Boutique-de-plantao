import React, { useState, useEffect } from 'react';
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import Header from '../components/header';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

function Payment() {
    const [users, setUsers] = useState([]);
    const [cookies] = useCookies(["credentials"]);
    const navigate = useNavigate()

    useEffect(() => {
            fetch("../jsons/clientes.json")
            .then((response) => response.json())
            .then((data) => setUsers(Object.values(data)))
            .catch((error) => console.log(error));
    }, [])

    const userLogin = cookies.credentials && cookies.credentials.login;
    const usuarioLogado = users.find((user) => user.login === userLogin);
    
    return (
        <>
            <Header />
            <Navbar />
            <main>
                
            </main>
            <Footer />

        </>
    );
}

export default Payment;