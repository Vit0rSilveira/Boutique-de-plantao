import React, { useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { Link, useNavigate } from 'react-router-dom';
import {BsPersonCircle} from "react-icons/Bs"
import {AiOutlineShoppingCart} from "react-icons/Ai"
import { useCookies } from "react-cookie";
import "../styles/components/header.css"

function Header() {
    const [cookies, setCookies, removeCookies] = useCookies(["user"]);
    useEffect(() => {
        if(cookies.user) {
            alert("a");
        } else {
            // navigate('/');
        }
    }, [])
    const navigate = useNavigate();

    return (
       <header>
        <div id="header-top">
                <Link to="/"><img src="../images/logos/logo_completo.png" alt="Logo da empresa" id="header-logo"/></Link>
                
                <div id="container-search">
                    <input type="text" name="input" id="input-search"/>
                <button> <FiSearch /></button>
                </div>
                
                <div id="header-buttons">
                    <button className="header-button"> <AiOutlineShoppingCart className="header-icon"/></button>
                    <Link to = "/login"><button className="header-button"> <BsPersonCircle className="header-icon" /></button></Link>
                </div>
            </div>
       </header>
    )
}

export default Header;