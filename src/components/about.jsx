import React from "react";
import { motion } from "framer-motion";

function About() {
  const boxVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="about-section" id="about">
      <h3 className="about-header">O mnie</h3>
      <div className="about-container">
        <motion.div
          className="about-box"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          variants={boxVariants}
        >
          <div className="about-text-box">
            <p>
              Jestem <b> psychologiem </b> i <b> psychoterapeutką </b> w trakcie
              4-letniego szkolenia w Szkole Psychoterapii Gestalt, która posiada
              akredytację EAGT (European Association of Gestalt Therapy) i jest
              członkiem European Association for Psychotherapy (EAP). Ukończyłam
              także kurs podstawowy i zaawansowany Terapii Skoncentrowanej na
              Rozwiązaniach (TSR).
            </p>
            <p>
              <b>Doświadczenie zawodowe </b> kształtowałam współpracując z
              Fundacją Itaka, w Centrum Wsparcia dla Osób Dorosłych w Kryzysie
              Psychicznym, w Pogotowiu Psychologicznym, w Centrum Wsparcia i
              Mediacji dla Rodzin a także podczas stażu w Samodzielnym
              Wojewódzkim Zespole Publicznych Zakładów Psychiatrycznej Opieki
              Zdrowotnej w Warszawie.
            </p>
            <p>
              Ponieważ wierzę, że człowiek kształci się przez całe życie, nadal
              doskonalę swoje umiejętności podczas szkoleń i warsztatów
              prowadzonych przez certyfikowanych trenerów różnych podejść
              psychoterapeutycznych.
            </p>
            <p>
              Superwizuję swoją praktykę indywidualną u certyfikowanych
              superwizorów. Kieruję się Kodeksami Etyki Zawodowej Psychologa i
              Polskiego Towarzystwa Psychoterapii Gestalt.
            </p>
            <p>
              W pracy psychoterapeutki ważna jest dla mnie <b> otwartość </b>
              oraz <b> uważność </b> na drugiego człowieka, które pomagają
              budować <b> autentyczną relację, </b> opartą na <b> szacunku </b>{" "}
              i <b> współodczuwaniu </b>. Towarzyszę ludziom w podróży do
              satysfakcjonującego życia, nazywania potrzeb i rozpoznawania
              składników potencjału, akceptowania siebie. Aby odzyskiwali
              kontrolę, doświadczali sprawczości, przezwyciężali kryzys, uczyli
              się samoregulacji. Wierzę, że akceptujący kontakt jest początkiem
              zmiany a każdy człowiek ma wystarczające zasoby i umiejętności
              żeby poradzić sobie z trudnościami.
            </p>
            <p>
              Pracuję indywidualnie z <b> osobami dorosłymi </b> i z{" "}
              <b> młodzieżą </b> w wieku od 16 roku życia. <b> Każda osoba</b>,
              bez względu na płeć, wyznanie, kolor skóry, orientację jest u mnie
              <b> mile widziana </b>.
            </p>
          </div>
        </motion.div>
      </div>
      
    </div>
  );
}

export default About;
