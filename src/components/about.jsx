import React from "react";
import { motion } from "framer-motion";

function About() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  return (
    <div className="about-section" id="about">
      <div className="about-container">
        <motion.div
          className="about-box"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          variants={containerVariants}
        >
          <div className="about-box about-box-with-image">
            <div className="about-box-image"></div>
            <div className="about-text-box-with-image ">
              <div className="name">
                <h1 className="about-name-h1">Marzanna Jakoniuk</h1>
                <p className="about-paragraph about-name-paragraph">
                  Psycholog <br></br>Psychoterapeutka
                </p>{" "}
              </div>
              <p className="about-paragraph about-paragraph-1">
                Jestem <b> psychologiem </b> i <b> psychoterapeutką </b> w
                trakcie 4-letniego szkolenia w Szkole Psychoterapii Gestalt,
                która posiada akredytację EAGT (European Association of Gestalt
                Therapy). Ukończyłam także kurs podstawowy i zaawansowany
                Terapii Skoncentrowanej na Rozwiązaniach (TSR).
              </p>
            </div>
          </div>
          <motion.div
            className="about-box"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            variants={containerVariants}
          >
            <div className="about-text-box">
              <p className="about-paragraph">
                <b>Doświadczenie zawodowe </b> kształtowałam współpracując z
                Fundacją Itaka, w Centrum Wsparcia dla Osób Dorosłych w Kryzysie
                Psychicznym, w Pogotowiu Psychologicznym, w Centrum Wsparcia i
                Mediacji dla Rodzin a także podczas stażu w Szpitalu
                Nowowiejskim w Warszawie.
              </p>
              <p className="about-paragraph">
                Ponieważ wierzę, że człowiek kształci się przez całe życie,
                nadal doskonalę swoje umiejętności podczas szkoleń i warsztatów.
              </p>
              <p className="about-paragraph">
                Superwizuję swoją praktykę indywidualną i kieruję się Kodeksami
                Etyki Zawodowej Psychologa i Polskiego Towarzystwa Psychoterapii
                i Gestalt.
              </p>
              <p className="about-paragraph">
                W pracy psychoterapeutki ważna jest dla mnie <b> otwartość </b>
                oraz <b> uważność </b> na drugiego człowieka, które pomagają
                budować <b> autentyczną relację, </b> opartą na
                <b> szacunku </b> i <b> współodczuwaniu</b>. Towarzyszę ludziom
                w podróży do satysfakcjonującego życia, nazywania potrzeb i
                rozpoznawania składników potencjału, akceptowania siebie. Aby
                odzyskiwali kontrolę, doświadczali sprawczości, przezwyciężali
                kryzys, uczyli się samoregulacji. Wierzę, że akceptujący kontakt
                jest początkiem zmiany.
              </p>
              <p className="about-paragraph">
                Pracuję indywidualnie z <b>osobami dorosłymi </b> i z{" "}
                <b>młodzieżą </b> w wieku od 16 roku życia. <b> Każda osoba</b>,
                bez względu na płeć, wyznanie, kolor skóry, orientację jest u
                mnie
                <b> mile widziana</b>.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
