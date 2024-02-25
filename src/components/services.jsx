import React from "react";
import { motion } from "framer-motion";
import "../styles/services.scss";

function Services() {
  const services = [
    "kryzys, zmiana życiowa, konflikt rodzinny, rozpad związku, rozstanie z bliską osobą",
    "depresja, zaburzenia nastroju, obniżony nastrój, brak energii",
    "doświadczanie przemocy, wybuchy agresji",
    "lęk, napady paniki, nerwica",
    "niska samoocena, niskie poczucie własnej wartości",
    "stres",
    "trudności z wyrażaniem uczuć, trudności w relacjach partnerskich, trudności ze snem, trudności w komunikacji",
    "utrata sensu życia, samotność, cierpienie",
    "trudności w relacjach z innymi",
    "trudności szkolne",
    "choroba bliskiej osoby, żałoba",
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
    <>
      <div className="services" id="services">
        <h3 className="services__title">
          W terapii indywidualnej pracuję z osobami, którym towarzyszy:
        </h3>
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
      <div className="photo-services"></div>
    </>
  );
}

export default Services;
