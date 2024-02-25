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
        <h2 className="services__title">Oferta</h2>
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
