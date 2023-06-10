import React, { useEffect, useState } from "react";
import { Cookies, useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import Header from "../components/header";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function Adm() {
    const [users, setUsers] = useState([])
    const [cookies] = useCookies(["credentials"]);
    const navigate = useNavigate()
    

    useEffect(() => {
        if (!cookies.credentials)
            navigate("/login")
        else if (cookies.credentials.type != "adm")
            navigate("/perfil")


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
                <h1>Esse aqui é o perfil ADM</h1>
            </main>
            <Footer />
        </>
    )
}


export default Adm;