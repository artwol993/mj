import React, { useState } from "react";
import "../styles/header.scss";
import { Link } from "react-scroll";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="h-container">
        {/* Dodaj klasę `active` do hamburgera w zależności od stanu `isOpen` */}
        <div
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <ul className={isOpen ? "mobile-nav active" : "mobile-nav"}>
          <li className="h-c-list">
            <Link
              to="welcome"
              smooth={true}
              duration={500}
              onClick={toggleMenu}
            >
              Witaj
            </Link>
          </li>
          <li className="h-c-list">
            <Link
              to="services"
              smooth={true}
              duration={500}
              onClick={toggleMenu}
            >
              Metody leczenia
            </Link>
          </li>
          <li className="h-c-list">
            <Link to="about" smooth={true} duration={500} onClick={toggleMenu}>
              Trochę o mnie
            </Link>
          </li>
          <li className="h-c-list">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              onClick={toggleMenu}
            >
              Kontakt
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
