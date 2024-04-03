import React from "react";
import { motion } from "framer-motion";

function List() {
  return (
    <>
      <div className="list__section">
        <h3 className="list__title">
          W terapii indywidualnej pracuję z osobami, którym towarzyszy:
        </h3>
        <motion.div
          className="list__container"
          initial="hidden"
          whileInView="visible"
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
            <li className="list__item"> lęk, napady paniki, nerwica</li>
            <li className="list__item">
              niska samoocena, niskie poczucie własnej wartości
            </li>
            <li className="list__item">stres</li>
            <li className="list__item">
              trudności z wyrażaniem uczuć, trudności w relacjach partnerskich,
              trudności ze snem, trudności w komunikacji
            </li>
            <li className="list__item">
              utrata sensu życia, samotność, cierpienie
            </li>
            <li className="list__item">trudności w relacjach z innymi</li>
            <li className="list__item">trudności szkolne</li>
            <li className="list__item">choroba bliskiej osoby, żałoba</li>
          </ul>
        </motion.div>
      </div>
    </>
  );
}

export default List;
