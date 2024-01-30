import React from "react";
import { motion } from "framer-motion";

function About() {
  const boxVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="about-section" id="about">
      <h2>O mnie</h2>
      <div className="about-container">
        <div className="about-container-1">
          <motion.div
            className="about-text-box"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            variants={boxVariants}
          >
            <p style={{ textIndent: "20px" }}>
              Mam <b>ponad 20-letnie doświadczenie </b> w pracy z młodzieżą i
              młodymi dorosłymi, które zdobywałam pracując w szkole średniej.
              Ważna jest dla mnie autentyczność oraz uważność na siebie i
              drugiego człowieka, które pomagają budować pozytywną relację.
              Widzę głęboki sens stosowania filozofii Podejścia Skoncentrowanego
              na Rozwiązaniach, w którym to terapeuta wspiera Klienta w
              zmierzaniu do preferowanej przyszłości, do życia bez problemu.
            </p>
            <br></br>
            <p style={{ textIndent: "20px" }}>
              Od 6 lat zajmuję się udzielaniem szeroko pojętego wsparcia
              psychologicznego osobom dorosłym i nastolatkom. Pracowałam między
              innymi w{" "}
              <b>Centrum Wsparcia dla Osób Dorosłych w Kryzysie Psychicznym </b>
              oraz
              <b> Antydepresyjnym Telefonie Zaufania Młodych Fundacji Itaka</b>.
            </p>
          </motion.div>
        </div>
        <div className="about-container-2">
          <div className="about-container-box">
            <motion.div
              className="about-box"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              variants={boxVariants}
            >
              <h3>Edukacja</h3>
              <ul>
                <li>Szkoła Psychoterapii Gestalt (w trakcie)</li>
                <li>
                  Uniwersytet Humanistycznospołeczny SWPS – jednolite studia
                  magisterskie
                </li>
                <li>
                  SWPS – Konflikty w Rodzinie i Mediacje Rodzinne – studia
                  podyplomowe
                </li>
                <li>
                  CTSR – Terapia Skoncentrowana na Rozwiązaniach – kurs
                  podstawowy i zaawansowany
                </li>
                <li>Psychoedukacji – Trener Umiejętności Wychowawczych</li>
              </ul>
            </motion.div>
            <motion.div
              className="about-box"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              variants={boxVariants}
            >
              <h3>Szkolenia</h3>
              <ul>
                <li>„Depresja jako sygnał”</li>
                <li>„TSR w obliczu lęku”</li>
                <li>
                  „Interwencja kryzysowa – jak pracować z osobą, którą dotknęła
                  nagła tragedia”
                </li>
                <li>
                  „Kryzys w kryzysie – czyli praca z cierpiącym nastolatkiem”
                </li>
                <li>„Od rodziny nie można uciec”</li>
              </ul>
            </motion.div>
          </div>
          <div className="about-container-box">
            <motion.div
              className="about-box"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              variants={boxVariants}
            >
              <h3> Specjalizacje</h3>
              <ul>
                <li>Konsultacje psychologiczne i terapia osób dorosłych</li>
                <li>
                  Konsultacje psychologiczne i terapia młodzieży od 16 r.ż.
                </li>
                <li>Trener Umiejętności Wychowawczych</li>
              </ul>
            </motion.div>
            <motion.div
              className="about-box"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              variants={boxVariants}
            >
              <h3>Doświadczenie zawodowe</h3>
              <ul>
                <li>
                  Antydepresyjny Telefon Zaufania Młodych – psycholog /
                  terapeuta – terapia krótkoterminowa
                </li>
                <li>
                  Pogotowie Psychologiczne – psycholog – konsultacje
                  psychologiczne, psychoedukacja
                </li>
                <li>
                  Centrum Wsparcia dla Osób w Kryzysie Psychicznym – psycholog –
                  konsultacje psychologiczne, interwencje
                </li>
                <li>
                  Fundacja Pracownia Relacji Rodzinnych – trener – warsztaty dla
                  rodziców nastolatków
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
