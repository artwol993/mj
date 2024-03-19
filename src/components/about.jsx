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
            <p style={{ textIndent: "20px" }}>
              Jestem psychoterapeutką w trakcie szkolenia
              <b> w Szkole Psychoterapii Gestalt,</b> która posiada akredytację
              <b> EAGT </b> (European Association of Gestalt Therapy), jest
              członkiem European Association for Psychotherapy <b> (EAP) </b> i
              spełnia wymogi „Ustawy o Niektórych Zawodach Medycznych”. Jestem
              także <b> psycholożką, terapeutką TSR i trenerką grupową. </b>
            </p>
          </div>
          <div className="about-text-box white-box">
            <p>
              <b>Doświadczenie zawodowe kształtowałam współpracując z:</b>
            </p>
            <ul className="exp-ul">
              <li className="exp-li">Fundacją Itaka, </li>
              <li className="exp-li">
                w Centrum Wsparcia dla Osób w Kryzysie Psychicznym,
              </li>
              <li className="exp-li">
                w Centrum Wsparcia i Mediacji dla Rodzin,
              </li>
              <li className="exp-li">
                Samodzielnym Wojewódzkim Zespole Publicznych Zakładów
                Psychiatrycznej Opieki Zdrowotnej w Warszawie,
              </li>
              <li className="exp-li">
                20 lat w pracy z młodzieżą i młodymi dorosłymi w szkole
                średniej.
              </li>
            </ul>
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
          <div className="about-box-image pic-therapy"></div>
          <div className="about-text-box">
            <p style={{ textIndent: "20px" }}>
              Ponieważ wierzę, że
              <b> człowiek kształci się przez całe życie, </b>
              nadal doskonalę swoje umiejętności podczas szkoleń i warsztatów
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
              W pracy psychoterapeutki ważna jest dla mnie <b> otwartość </b>
              oraz <b> uważność na drugiego człowieka, </b> które pomagają
              budować autentyczną relację, opartą na szacunku i współodczuwaniu.
              Towarzyszę ludziom w podróży do satysfakcjonującego życia,
              <b> nazywania potrzeb </b>i rozpoznawania składników potencjału,{" "}
              <b> akceptowania siebie. </b>
              Aby odzyskiwali kontrolę, doświadczali sprawczości, przezwyciężali
              kryzys.
            </p>
          </div>
          <div className="about-text-box white-box">
            <p>
              Pracuję indywidualnie z <b>młodzieżą</b> w wieku od 16 roku życia
              oraz z <b>osobami dorosłymi</b>. Superwizuję swoją praktykę
              indywidualną u certyfikowanych superwizorów. Kieruję się Kodeksami{" "}
              <b>Etyki Psychologa </b> i
              <b> Polskiego Towarzystwa Psychoterapii Gestalt</b>.
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
          <div className="about-box-image pic-change"></div>
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
          <div className="about-text-box ">
            <p className="white-text">
              Ponieważ gotowe rozwiązania nie istnieją, zapraszam do wspólnych
              poszukiwań.
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
            <p className="white-text">
              Bogate doświadczenia zawodowe i osobiste pomagają mi lepiej
              zrozumieć świat moich klientów.
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
          <div className="about-text-box ">
            <div className="about-box-picture"></div>
            <p className="white-text">
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
