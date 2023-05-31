import React from "react";
import { FiSearch } from "react-icons/fi";
import {BsPersonCircle} from "react-icons/Bs"
import {AiOutlineShoppingCart} from "react-icons/Ai"
import "../styles/header.css"

function Header() {
    return (
       <header>
        <div id="header-top">
                <a href="./"><img src="../images/logos/logo_completo.png" alt="Logo da empresa" id="header-logo"/></a>
        
                
                <div id="container-search">
                    <input type="text" name="input" id="input-search"/>
                <button> <FiSearch /></button>
                </div>
                
                <div id="header-buttons">
                    <button className="header-button"> <AiOutlineShoppingCart className="header-icon"/></button>
                    <button className="header-button"> <BsPersonCircle className="header-icon" /></button>
                </div>
            </div>
       </header>
    )
}

export default Header;