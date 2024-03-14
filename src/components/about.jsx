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
        <motion.div
          className="about-box exp"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          variants={boxVariants}
        >
          <div className="about-text-box">
            <p style={{ textIndent: "20px" }}>
              Jestem psychoterapeutką w trakcie szkolenia
              <b>w Szkole Psychoterapii Gestalt,</b> która posiada akredytację
              <b> EAGT</b> (European Association of Gestalt Therapy), jest
              członkiem European Association for Psychotherapy <b>(EAP)</b> i
              spełnia wymogi „Ustawy o Niektórych Zawodach Medycznych”. Jestem
              także <b>psycholożką, terapeutką TSR i trenerką grupową.</b>
            </p>
          </div>
          <div className="about-text-box">
            <p>
              Doświadczenie zawodowe kształtowałam współpracując z
              <b> Fundacją Itaka,</b> w Centrum Wsparcia dla Osób w Kryzysie
              Psychicznym, w <b>Centrum Wsparcia i Mediacji dla Rodzin, </b>
              Samodzielnym Wojewódzkim Zespole Publicznych Zakładów
              Psychiatrycznej Opieki Zdrowotnej w Warszawie,
              <b> oraz przez 20 lat w pracy z młodzieżą </b> i młodymi dorosłymi
              w szkole średniej.
            </p>
          </div>
        </motion.div>
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
              Ponieważ wierzę, że człowiek kształci się przez całe życie, nadal
              doskonalę swoje umiejętności podczas szkoleń i warsztatów
              prowadzonych przez certyfikowanych trenerów różnych podejść
              psychoterapeutycznych.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="about-box"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          variants={boxVariants}
        >
          <div className="about-text-box">
            <p style={{ textIndent: "20px" }}>
              Pracuję indywidualnie z młodzieżą w wieku od 16 roku życia oraz z
              osobami dorosłymi. Superwizuję swoją praktykę indywidualną u
              certyfikowanych superwizorów. Kieruję się Kodeksami Etyki
              Psychologa i Polskiego Towarzystwa Psychoterapii Gestalt.
            </p>
          </div>

          <div className="about-text-box">
            <p>
              W pracy psychoterapeutki ważna jest dla mnie otwartość oraz
              uważność na drugiego człowieka, które pomagają budować autentyczną
              relację, opartą na szacunku i współodczuwaniu. Towarzyszę ludziom
              w podróży do satysfakcjonującego życia, nazywania potrzeb i
              rozpoznawania składników potencjału, akceptowania siebie. Aby
              odzyskiwali kontrolę, doświadczali sprawczości, przezwyciężali
              kryzys.
            </p>
          </div>
          <div className="about-text-box">
            <p>
              Wierzę, że akceptujący kontakt jest początkiem zmiany a każdy
              człowiek ma wystarczające zasoby i umiejętności żeby poradzić
              sobie z trudnościami.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="about-box"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          variants={boxVariants}
        >
          <div className="about-box-picture"></div>
        </motion.div>
        <motion.div
          className="about-box"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          variants={boxVariants}
        >
          <div className="about-text-box">
            <p style={{ textIndent: "20px" }}>
              Ponieważ gotowe rozwiązania nie istnieją, zapraszam do wspólnych
              poszukiwań.
            </p>
          </div>

          <div className="about-text-box">
            <p>
              Bogate doświadczenia zawodowe i osobiste pomagają mi lepiej
              zrozumieć świat moich klientów.
            </p>
          </div>

          <div className="about-text-box">
            <p>
              Prywatnie jestem żoną i mamą. W wolnym czasie lubię kontakt z
              naturą, piesze wędrówki i wycieczki rowerowe.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
