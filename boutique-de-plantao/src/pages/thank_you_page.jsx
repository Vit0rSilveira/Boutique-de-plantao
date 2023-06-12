import React from "react";
import Header from '../components/header.jsx';
import Navbar from '../components/navbar.jsx';
import Footer from '../components/footer.jsx';
//import "../styles/pages/about_us.css";

function Thank_you() {
    return (
        <>
            <Header />
            <Navbar />
            <main>
                <div id="obrigado">
                    <h1>Agradecemos pela preferência</h1>
                    <p>Faremos de tudo para que seu produto chegue perfeitamente e o quão antes possível!</p>
                </div>

            </main>
            <Footer />
        </>
    )
}

export default Thank_you;
