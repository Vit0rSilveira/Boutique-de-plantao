import React, { useEffect } from "react";
import { useState } from "react";
import { useCookies } from "react-cookie";
import Header from "../components/header";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Personal_data from "../components/personal_data";
import { useNavigate, useParams } from "react-router-dom";


function Register(props) {
    const [cookies] = useCookies(["credentials"])
    const navigate = useNavigate()

    useEffect(() => {
        if (!cookies.credentials)
            navigate("/cadastrar")
        else if (cookies.credentials.type === "cliente")
            navigate("/perfil")
        else
            navigate("/adm")
    },[])


    return (
        <>
            <Header />
            <Navbar />

            <main>
                <h1>Cadastrar Usuário</h1>
                <div id="formulario">
                   <Personal_data user={{ tipo: "cliente" }}/>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Register