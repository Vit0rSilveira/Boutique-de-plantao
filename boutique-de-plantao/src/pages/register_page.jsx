import React from "react";
import { useState } from "react";
import { useCookies } from "react-cookie";
import Header from "../components/header";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Personal_data from "../components/personal_data";


function Register() {

    return (
        <>
            <Header />
            <Navbar />

            <main>
                <h1>Cadastro</h1>
                <div id="formulario">
                   <Personal_data user = {null}/>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Register