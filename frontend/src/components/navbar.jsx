import React, { useRef, useState, useEffect} from "react";
import { Link, useNavigate } from 'react-router-dom';
import {FaBars} from "react-icons/fa";
import "../styles/components/navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const navbarListRef = useRef(null);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      const navbarList = navbarListRef.current;
      if (navbarList) {
        const isSmallScreen = navbarList.offsetWidth < navbarList.scrollWidth;
        setMenuOpen(isSmallScreen);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav>
      <button className="menu-button" onClick={toggleMenu}>
        <FaBars id="bar-icon"/>
      </button>
      <ul
        id="navbar-list"
        className={isMenuOpen ? "open" : ""}
        ref={navbarListRef}
      >
        <div id="list-icons">
          <li><Link to="/pesquisar/planta">Plantas</Link></li>
          <li><Link to="/pesquisar/flor">Flores</Link></li>
          <li><Link to="/pesquisar/vaso">Vasos</Link></li>
          <li><Link to="/pesquisar/suporte">Suportes</Link></li>
          <li><Link to="/pesquisar/jardinagem">Jardinagem</Link></li>
          <li><Link to="/sobre-nos" >Sobre Nós</Link></li>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
