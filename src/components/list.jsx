import React from "react";
import { motion } from "framer-motion";

function List() {
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
      <div className="list__section">
        <h3 className="list__title">
          W terapii indywidualnej pracuję z osobami, którym towarzyszy:
        </h3>
        <motion.div
          className="services-box"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
        >
          <ul className="list__items">
            <li className="list__item">
              kryzys, zmiana życiowa, konflikt rodzinny, rozpad związku,
              rozstanie z bliską osobą
            </li>
            <li className="list__item">
              depresja, zaburzenia nastroju, obniżony nastrój, brak energii
            </li>

            <li className="list__item">
              doświadczanie przemocy, wybuchy agresji
            </li>
            <li className="list__item">lęk, napady paniki, nerwica, stres</li>
            <li className="list__item">
              niska samoocena, niskie poczucie własnej wartości
            </li>
            <li className="list__item">
              trudności z wyrażaniem uczuć, trudności w relacjach, trudności ze
              snem, trudności w komunikacji
            </li>
            <li className="list__item">
              utrata sensu życia, samotność, cierpienie
            </li>
            <li className="list__item">choroba bliskiej osoby, żałoba</li>
          </ul>

          <div className="list__picture"></div>
        </motion.div>
      </div>
    </>
  );
}

export default List;
