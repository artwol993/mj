import React, { useEffect, useState } from "react";
import "../styles/welcome.scss";
import logo from "../assets/logo.png";
import mj from "../assets/mj.jpg";

function Welcome() {
  const [showBottomSection, setShowBottomSection] = useState(false);
  const [logoBackground, setLogoBackground] = useState(logo);
  const [title, setTitle] = useState("Psychoterapeuta");

  const titles = ["Psychoterapeuta", "Psycholog", "Terapeuta TSR"];

  useEffect(() => {
    const adjustWelcomeHeight = () => {
      const welcomeSection = document.getElementById("welcome");
      const viewportHeight = window.innerHeight;
      welcomeSection.style.height = `${viewportHeight}px`;
    };

    adjustWelcomeHeight();

    window.addEventListener("resize", adjustWelcomeHeight);

    return () => window.removeEventListener("resize", adjustWelcomeHeight);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowBottomSection(true);
      setLogoBackground(mj);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (showBottomSection) {
      const interval = setInterval(() => {
        setTitle((prevTitle) => {
          const currentIndex = titles.indexOf(prevTitle);
          const nextIndex = (currentIndex + 1) % titles.length;
          return titles[nextIndex];
        });
      }, 2000); // Zmiana tytułu co 2 sekundy

      return () => clearInterval(interval);
    }
  }, [showBottomSection]);

  return (
    <>
      <div
        className={`container welcome-container ${
          showBottomSection ? "show-bottom" : ""
        }`}
        id="welcome"
      >
        <div className="top-section">
          <div
            className="logo-container"
            style={{ backgroundImage: `url(${logoBackground})` }}
          ></div>
        </div>
        <div className="bottom-section">
          <div className="name">
            <p>{title}</p> <h1>Marzanna Jakoniuk</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Welcome;
