import React from "react";
import "../styles/header.scss";
import { Link } from "react-scroll";

function Header() {
  return (
    <div>
      <ul className="h-container">
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
  );
}

export default Header;
