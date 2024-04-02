import React from "react";
import { motion } from "framer-motion";
import Price from "./price";
import Type from "./type";

function Offer() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  return (
    <section className="offer-section" id="offer">
      <h3 className="offer-price-header">Oferta</h3>
      //price-section
      <Price />
      //type-section
      <Type />
      //info section
      <motion.div
        className="offer-info-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <h3 className="offer-info-header">
          Czego spodziewać się podczas spotkań terapii indywidualnej?
        </h3>
        <p className="offer-info-paragraph">
          Każde spotkanie terapii indywidualnej trwa 50 minut i odbywa się raz w
          tygodniu w ustalony dzień i godzinę. Pierwsze 2-3 spotkania to
          spotkania konsultacyjne. Na pierwszym spotkaniu standardowo zadaję
          pytania dotyczące sytuacji życiowej zgłaszającej się osoby oraz
          doświadczanych przez nią trudności, z którymi chciałaby poradzić sobie
          podczas terapii. Kolejne dwa spotkania to czas dla obu stron na
          podjęcie decyzji co do dalszej współpracy. Jest to także przestrzeń na
          wstępne sformułowanie celów terapeutycznych zgłaszającej się osoby.
        </p>
      </motion.div>
    </section>
  );
}

export default Offer;
