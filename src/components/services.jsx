import React from "react";
import { motion } from "framer-motion";
import "../styles/services.scss";

function Services() {
  return (
    <div className="services-section" id="services">
      <div className="services">
        <h3 className="services-title">Gestalt</h3>
        <motion.div
          className="services-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="services-box">
            <div className="services-box-image image-1"></div>
            <div className="services-box-text">
              <p className="services-box-p">
                Psychoterapia Gestalt jest jednym z wiodących podejść nurtu
                humanistycznego. Oznacza to, że w centrum jej zainteresowania
                stoi człowiek, jego zasoby oraz relacja międzyludzka.
                Współczesna psychoterapia Gestalt zakłada, że{" "}
                <b> każdy człowiek ma </b> w sobie <b> potencjał do rozwoju </b>{" "}
                i ma możliwość satysfakcjonującego życia w wybranym środowisku.
                Jest to możliwe do osiągnięcia przy spełnieniu warunku
                świadomego funkcjonowania, czyli zauważania i rozumienia tego,
                co się dzieje w nas, z nami i dookoła nas.
              </p>
            </div>
          </div>
          <div className="services-box">
            <div className="services-box-text">
              <p className="services-box-p">
                Cierpienie psychiczne powstaje gdy przeżywane emocje i
                niezrealizowane potrzeby pozostają poza świadomością człowieka.
                <b> Celem psychoterapii Gestalt </b> jest budowanie przez
                Klienta/Klientkę świadomości siebie, po to, żeby w dalszej
                perspektywie móc samodzielnie się wyregulować: uświadamiać sobie
                własne emocje, podejmować autonomiczne decyzje w oparciu o
                potrzeby i pragnienia. Słowem, tak realizować siebie w świecie,
                tak się z nim kontaktować, aby nie cierpieć.
              </p>
            </div>
            <div className="services-box-image image-2"></div>
          </div>
          <div className="services-box">
            <div className="services-box-text-last">
              <p className="services-box-p">
                Proces terapeutyczny powinien zmierzać do odkrycia tego, co
                zaburza korzystne funkcjonowanie w środowisku. To odkrywanie
                odbywa się w oparciu o <b> terapeutyczny sojusz </b> -
                niepowtarzalną relację Klientki/Klienta z terapeutką, opartą na
                <b> zaufaniu, uważności i szacunku </b>.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Services;
