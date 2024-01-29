import React from "react";
import { motion } from "framer-motion";

function About() {
  const boxVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="container about-section" id="about">
      <h2>O mnie</h2>
      <div className="about-container">
        <div className="about-container-box">
          <motion.div
            className="about-box"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            variants={boxVariants}
          >
            <p style={{ textIndent: "20px" }}>
              Mam <b>ponad 20-letnie doświadczenie </b> w pracy z młodzieżą i
              młodymi dorosłymi, które zdobywałam pracując w szkole średniej.
            </p>
            <p style={{ textIndent: "20px" }}>
              Od 6 lat zajmuję się udzielaniem szeroko pojętego wsparcia
              psychologicznego osobom dorosłym i nastolatkom. Pracowałam między
              innymi w{" "}
              <b>Centrum Wsparcia dla Osób Dorosłych w Kryzysie Psychicznym</b>
              oraz
              <b>Antydepresyjnym Telefonie Zaufania Młodych Fundacji Itaka</b>.
            </p>
          </motion.div>
          <motion.div
            className="about-box"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            variants={boxVariants}
          >
            <p style={{ textIndent: "20px" }}>
              W ramach Szkoły dla Rodziców i Wychowawców prowadziłam
              <b>40-godzinne warsztaty dla rodziców</b> a także autorskie
              warsztaty
            </p>
            <p style={{ textIndent: "20px" }}>
              Jestem członkiem Polskiego Stowarzyszenia Terapeutów Terapii
              Skoncentrowanej na Rozwiązaniach (PSTTSR).
            </p>
          </motion.div>
          <motion.div
            className="about-box"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            variants={boxVariants}
          >
            <p style={{ textIndent: "20px" }}>
              Jestem absolwentką psychologii na
              <b>
                {" "}
                Uniwersytecie Humanistycznospołecznym SWPS w Warszawie
              </b>{" "}
              oraz psychoterapeutką w trakcie szkolenia w <b>nurcie Gestalt</b>.
            </p>
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
            <p style={{ textIndent: "20px" }}>
              Ukończyłam studia podyplomowe
              <b>Konflikty w Rodzinie i Mediacje Rodzinne</b>
              na SWPS oraz I i II stopień szkolenia w nurcie
              <b>Terapii Skoncentrowanej na Rozwiązaniach</b>. Obecnie jestem w
              procesie certyfikacji w Centrum TSR.
            </p>
          </motion.div>
          <motion.div
            className="about-box"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            variants={boxVariants}
          >
            <p style={{ textIndent: "20px" }}>
              Ważna jest dla mnie <b>autentyczność</b> oraz <b>uważność</b> na
              siebie i drugiego człowieka, które pomagają budować pozytywną
              relację. Widzę głęboki sens stosowania{" "}
              <b>filozofii Podejścia Skoncentrowanego na Rozwiązaniach</b>, w
              którym to terapeuta wspiera Klienta w zmierzaniu do preferowanej
              przyszłości, do życia bez problemu.
            </p>
          </motion.div>
          <motion.div
            className="about-box"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            variants={boxVariants}
          >
            <p style={{ textIndent: "20px" }}>
              Dlatego też, w pracy terapeutycznej, wspólnie z Klientami,
              poszukuję <b>składników ich potencjału</b> aby odzyskiwali
              kontrolę, doświadczali sprawczości, przezwyciężali kryzys. Wierzę,
              że trudna sytuacja życiowa jest początkiem zmiany a każdy człowiek
              ma wystarczające zasoby i umiejętności żeby poradzić sobie z
              trudnościami.
            </p>
          </motion.div>
        </div>
        <div className="about-container-box">
          <motion.div
            className="about-box box-end"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            variants={boxVariants}
          >
            <p style={{ textAlign: "center" }}>
              <b>
                Ponieważ gotowe rozwiązania nie istnieją, zapraszam do wspólnych
                poszukiwań.
              </b>
            </p>
          </motion.div>
        </div>
      </div>
      <div className="about-container-2">
        <div className="relax-bar"></div>
      </div>
    </div>
  );
}

export default About;
