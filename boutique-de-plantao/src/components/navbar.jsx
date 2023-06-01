import React, { useRef, useState, useEffect } from "react";
import {FaBars} from "react-icons/fa"
import "../styles/navbar.css";

function Navbar() {
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
      <button className="menu-button" onClick={toggleMenu}> <FaBars id="bar-icon"/> </button>
      <ul
        id="navbar-list"
        className={isMenuOpen ? "open" : ""}
        ref={navbarListRef}
      >
        <a href="#"><li>Plantas</li></a>
        <a href="#"><li>Flores</li></a>
        <a href="#"><li>Vasos</li></a>
        <a href="#"><li>Suportes</li></a>
        <a href="#"><li>Jardinagem</li></a>
        <a href="#"><li>Sobre Nós</li></a>
      </ul>
    </nav>
  );
}

export default Navbar;