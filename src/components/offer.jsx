import React from "react";
import Price from "./price";
import Type from "./type";
import Info from "./info";
import List from "./list";

function Offer() {
  return (
    <section className="offer-section" id="offer">
      <h3 className="offer-header">Oferta</h3>
      <List />
      <Price />
      <Type />
      <Info />
    </section>
  );
}

export default Offer;
