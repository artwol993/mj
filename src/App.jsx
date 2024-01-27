import React from "react";
import "./styles/config/main.scss";
import Header from "./components/header";
import Welcome from "./components/welcome";
import About from "./components/about";
import Services from "./components/services";
import Contact from "./components/contact";

function App() {
  return (
    <div>
      <Header />
      <Welcome />
      <About />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
