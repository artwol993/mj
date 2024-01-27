import React, { useState } from "react";
import "../styles/header.scss";
import { Link } from "react-scroll";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    console.log("Przed zmianą:", isOpen);
    setIsOpen((prevIsOpen) => {
      console.log("W trakcie zmiany, poprzedni stan:", prevIsOpen);
      return !prevIsOpen;
    });
  };

  return (
    <div>
      <div className="h-container">
        <div
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <div className="hamburger-bar"></div>
          <div className="hamburger-bar"></div>
          <div className="hamburger-bar"></div>
        </div>
        {/* Menu mobilne */}
        <ul className={`mobile-nav ${isOpen ? "active" : ""}`}>
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
        {/* Menu desktopowe */}
        <ul className="desktop-nav">
          <li className="h-c-list">
            <Link to="welcome" smooth={true} duration={500}>
              Witaj
            </Link>
          </li>
          <li className="h-c-list">
            <Link to="services" smooth={true} duration={500}>
              Metody leczenia
            </Link>
          </li>
          <li className="h-c-list">
            <Link to="about" smooth={true} duration={500}>
              Trochę o mnie
            </Link>
          </li>
          <li className="h-c-list">
            <Link to="contact" smooth={true} duration={500}>
              Kontakt
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
