import React from "react";
import Price from "./price";
import Type from "./type";
import Info from "./info";

function Offer() {
  return (
    <section className="offer-section" id="offer">
      <h3 className="offer-price-header">Oferta</h3>
      //price-section
      <Price />
      //type-section
      <Type />
      //info section
      <Info />
    </section>
  );
}

export default Offer;
