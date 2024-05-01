import React from "react";
import "./styles/config/main.scss";

import "./scripts/replaceLetters";

import Header from "./components/header";
import Welcome from "./components/welcome";
import About from "./components/about";
import Offer from "./components/offer";
import Services from "./components/services";
import Contact from "./components/contact";

function App() {
  return (
    <div>
      <Header />
      <Welcome />
      <About />
      <Services />
      <Offer />
      <Contact />
    </div>
  );
}

export default App;
