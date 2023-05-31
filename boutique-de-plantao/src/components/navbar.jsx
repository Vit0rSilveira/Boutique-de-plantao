import React from "react";
import "../styles/navbar.css"

function Navbar() {
    return (
        <nav>
                <ul id="navbar-list">
                    <a href="#"><li>Plantas</li></a>
                    <a href="#"><li>Flores</li></a>
                    <a href="#"><li>Vasos</li></a>
                    <a href="#"><li>Suportes</li></a>
                    <a href="#"><li>Jardinagem</li></a>
                    <a href="sobre.html"><li>Sobre Nós</li></a>
                </ul>
            </nav>
    )
}

export default Navbar