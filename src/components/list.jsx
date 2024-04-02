import React from "react";
import { motion } from "framer-motion";

function List() {
  return (
    <>
      <div className="list-container">
        <h3 className="list__title">
          W terapii indywidualnej pracuję z osobami, którym towarzyszy:
        </h3>
        <motion.div
          className="list__box"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <ul className="list__items">
            <li>
              kryzys, zmiana życiowa, konflikt rodzinny, rozpad związku,
              rozstanie z bliską osobą
            </li>
            <li>
              depresja, zaburzenia nastroju, obniżony nastrój, brak energii
            </li>
            <li>doświadczanie przemocy, wybuchy agresji</li>
            <li>lęk, napady paniki, nerwica</li>
            <li>niska samoocena, niskie poczucie własnej wartości</li>
            <li>stres</li>
            <li>
              trudności z wyrażaniem uczuć, trudności w relacjach partnerskich,
              trudności ze snem, trudności w komunikacji
            </li>
            <li>utrata sensu życia, samotność, cierpienie</li>
            <li>trudności w relacjach z innymi</li>
            <li>trudności szkolne</li>
            <li>choroba bliskiej osoby, żałoba</li>
          </ul>
        </motion.div>
      </div>
    </>
  );
}

export default List;
