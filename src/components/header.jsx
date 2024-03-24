import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isDisplayed, setIsDisplayed] = useState(false); // Nowy stan

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY; // Zaktualizowane
      setIsVisible(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    const timer = setTimeout(() => {
      setIsDisplayed(true);
    }, 2000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const toggleMenu = () => {
    console.log("Przed zmianą:", isOpen);
    setIsOpen((prevIsOpen) => {
      console.log("W trakcie zmiany, poprzedni stan:", prevIsOpen);
      return !prevIsOpen;
    });
  };

  return (
    <>
      <div className={`header ${isVisible ? "is-visible" : ""}`}>
        <div className={`h-container ${isDisplayed ? "displayed" : "hidden"}`}>
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
                  Start
                </Link>
              </li>
              <li className="h-c-list">
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  onClick={toggleMenu}
                >
                  O mnie
                </Link>
              </li>
              <li className="h-c-list">
                <Link
                  to="offer"
                  smooth={true}
                  duration={500}
                  onClick={toggleMenu}
                >
                  Gestalt
                </Link>
              </li>
              <li className="h-c-list">
                <Link
                  to="services"
                  smooth={true}
                  duration={500}
                  onClick={toggleMenu}
                >
                  Oferta
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
                  Start
                </Link>
              </li>
              <li className="h-c-list">
                <Link to="about" smooth={true} duration={500}>
                  O mnie
                </Link>
              </li>
              <li className="h-c-list">
                <Link to="offer" smooth={true} duration={500}>
                  Gestalt
                </Link>
              </li>
              <li className="h-c-list">
                <Link to="services" smooth={true} duration={500}>
                  Oferta
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
      </div>
    </>
  );
}

export default Header;
