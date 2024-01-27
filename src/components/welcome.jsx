import React, { useEffect, useState } from "react";
import "../styles/welcome.scss";
import logo from "../assets/logo.png";
import mj from "../assets/mj.jpg";

function Welcome() {
  const [showBottomSection, setShowBottomSection] = useState(false);
  const [logoBackground, setLogoBackground] = useState(logo);

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
      setLogoBackground(mj); // Zmiana tła logo
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`container welcome-container ${
        showBottomSection ? "show-bottom" : ""
      }`}
      id="welcome"
    >
      <div className="top-section">
        {/* Górna część z tłem zdjęcia */}
        <div
          className="logo-container"
          style={{ backgroundImage: `url(${logoBackground})` }} // Dynamiczne tło logo
        >
          <img src="/assets/logo.png" alt="Logo" />
        </div>
      </div>
      <div className="bottom-section">{/* Dolna część jako osobny div */}</div>
    </div>
  );
}

export default Welcome;
