import React from "react";
import "./App.scss";
import Header from "./components/header";
import Footer from "./components/footer";
import Welcome from "./components/welcome";

function App() {
  return (
    <div className="App">
      <Header />
      <Welcome />
      <Footer />
    </div>
  );
}

export default App;
