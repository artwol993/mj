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
          className="about-box"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          variants={boxVariants}
        >
          <div className="about-text-box">
            <p style={{ textIndent: "20px" }}>
              Jestem psychoterapeutką w trakcie szkolenia w Szkole Psychoterapii
              Gestalt, która posiada akredytację EAGT (European Association of
              Gestalt Therapy), jest członkiem European Association for
              Psychotherapy (EAP) i spełnia wymogi „Ustawy o Niektórych Zawodach
              Medycznych”. Jestem także psycholożką, terapeutką TSR i trenerką
              grupową.
              <br></br>
              <br></br>
              Doświadczenie zawodowe kształtowałam współpracując z Fundacją
              Itaka, w Centrum Wsparcia dla Osób w Kryzysie Psychicznym, w
              Centrum Wsparcia i Mediacji dla Rodzin, Samodzielnym Wojewódzkim
              Zespole Publicznych Zakładów Psychiatrycznej Opieki Zdrowotnej w
              Warszawie, oraz przez 20 lat w pracy z młodzieżą i młodymi
              dorosłymi w szkole średniej.
              <br></br>
              <br></br>
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
              <br></br>
              <br></br>W pracy psychoterapeutki ważna jest dla mnie otwartość
              oraz uważność na drugiego człowieka, które pomagają budować
              autentyczną relację, opartą na szacunku i współodczuwaniu.
              Towarzyszę ludziom w podróży do satysfakcjonującego życia,
              nazywania potrzeb i rozpoznawania składników potencjału,
              akceptowania siebie. Aby odzyskiwali kontrolę, doświadczali
              sprawczości, przezwyciężali kryzys.
              <br></br>
              <br></br>
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
          <div className="about-text-box">
            <p style={{ textIndent: "20px" }}>
              Ponieważ gotowe rozwiązania nie istnieją, zapraszam do wspólnych
              poszukiwań.
              <br></br>
              <br></br>
              Bogate doświadczenia zawodowe i osobiste pomagają mi lepiej
              zrozumieć świat moich klientów.
              <br></br> <br></br>
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
