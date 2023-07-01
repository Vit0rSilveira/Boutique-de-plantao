import React from "react";
import Header from '../components/header.jsx';
import Navbar from '../components/navbar.jsx';
import Footer from '../components/footer.jsx';
import Payment_card from "../components/payment_card.jsx";

function Thank_you() {
    return (
        <>
            <Header />
            <Navbar />
            <main>
               <Payment_card />

            </main>
            <Footer />
        </>
    )
}

export default Thank_you;
