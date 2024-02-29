import React from "react";
import { motion } from "framer-motion";
import "../styles/services.scss";

function Services() {
  return (
    <div className="services-section" id="services">
      <div className="services">
        <h3 className="services__title">
          W terapii indywidualnej pracuję z osobami, którym towarzyszy:
        </h3>
        <motion.div
          className="services__box"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="services__paragraph">
            kryzys, zmiana życiowa, konflikt rodzinny, rozpad związku, rozstanie
            z bliską osobą{" "}
          </p>
          <p className="services__paragraph">
            depresja, zaburzenia nastroju, obniżony nastrój, brak energii
          </p>
          <p className="services__paragraph">
            doświadczanie przemocy, wybuchy agresji
          </p>
          <p className="services__paragraph">lęk, napady paniki, nerwica</p>
          <p className="services__paragraph">
            niska samoocena, niskie poczucie własnej wartości
          </p>
          <p className="services__paragraph">stres</p>
          <p className="services__paragraph">
            trudności z wyrażaniem uczuć, trudności w relacjach partnerskich,
            trudności ze snem, trudności w komunikacji
          </p>
          <p className="services__paragraph">
            utrata sensu życia, samotność, cierpienie
          </p>
          <p className="services__paragraph">trudności w relacjach z innymi</p>
          <p className="services__paragraph">trudności szkolne</p>
          <p className="services__paragraph">choroba bliskiej osoby, żałoba</p>
        </motion.div>
      </div>
      <div className="photo-services"></div>
    </div>
  );
}

export default Services;
