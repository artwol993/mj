import React from "react";
import { motion } from "framer-motion";
import "../styles/services.scss";

function Services() {
  const services = [
    "lęk",
    "depresja",
    "niska samoocena",
    "rozwód, rozstanie, rozpad związku",
    "nerwica",
    "zaburzenia adaptacyjne",
    "zaburzenia nastroju",
    "problemy z koncentracją uwagi",
    "trudności w relacjach z innymi",
    "trudności szkolne",
    "ataki paniki",
    "trudności z wyrażaniem uczuć",
    "wybuchy agresji",
    "DDA",
    "DDD",
    "zaburzenia zachowania",
    "OCD (nerwica natręctw)",
    "PTSD (zaburzenia pourazowe)",
    "kłopoty ze snem",
    "lęk separacyjny",
    "hipochondria",
    "konflikty rodzinne",
    "autoagresja",
    "myśli samobójcze",
    "stres",
    "napady paniki",
    "wypalenie zawodowe",
    "dotknięcie przemocą",
    "zagrożenie alienacją rodzicielską",
    "zmiana, kryzys życiowy",
  ];

  const listItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.05,
      },
    }),
  };

  return (
    <div className="services" id="services">
      <h2 className="services__title">Zakres leczenia</h2>
      <motion.div
        className="services__list-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {services.map((service, i) => (
          <motion.div
            className="services__item"
            custom={i}
            variants={listItemVariants}
            key={i}
          >
            {service}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Services;
