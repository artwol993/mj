import React from "react";
import { motion } from "framer-motion";
import "../styles/info.scss";

function Info() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  return (
    <>
      <motion.div
        className="info__container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <h3 className="info__header">
          Czego spodziewać się podczas spotkań terapii indywidualnej?
        </h3>
        <p className="info__paragraph">
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
    </>
  );
}

export default Info;
