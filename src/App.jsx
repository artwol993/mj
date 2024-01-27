import React from "react";
import "./styles/config/main.scss";
import Header from "./components/header";
import Footer from "./components/footer";
import Welcome from "./components/welcome";

function App() {
  return (
    <div>
      <Header />
      <Welcome />
      <Footer />
    </div>
  );
}

export default App;
