import React, { useState } from "react";
import Modal from "./modal";
import { motion } from "framer-motion";

function Offer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState("");

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  const modalData = {
    "Konsultacja psychologiczna":
      "To rozmowa, podczas której psycholog zbiera informacje dotyczące zgłaszanych problemów, omawia z osobą zgłaszającą się na konsultację bieżące dolegliwości emocjonalne, relacyjne, rodzinne i ich historię. Nie proponuje gotowych rozwiązań ale pomaga dobrać najbardziej odpowiedni rodzaj dalszej pracy (np. terapia grupowa, terapia indywidualna, terapia pary, mediacje, leczenie psychiatryczne, itp.)",
    "Terapia krótkoterminowa":
      "Trwa zazwyczaj kilka miesięcy i koncentruje się na rozwiązaniu jednego zgłaszanego problemu. Jest użyteczna gdy potrzebna jest pomoc w jednej konkretnej sytuacji życiowej. Praca terapeutyczna koncentruje się na odkrywaniu i rozwijaniu zasobów oraz umiejętności osoby szukającej wsparcia. Terapeuta towarzyszy w poszukiwaniu nowych sposobów radzenia sobie z problemem i wprowadzaniu w życie zmian.",
    "Terapia długoterminowa":
      "To regularne spotkania, których cel określany jest podczas kilku pierwszych sesji. Nastawiona jest na poznanie siebie, własnych potrzeb, zrozumienie ograniczających mechanizmów, które uniemożliwiają pełne korzystanie z własnego potencjału. Dzięki relacji terapeutycznej, terapeutycznemu przymierzu osoba w psychoterapii uczy się nazywać własne potrzeby, odpowiedzialnie i z szacunkiem do własnych możliwości (uwzględniając emocje, myśli i ciało), realizować je w świcie. Moje doświadczenie pokazuje, że psychoterapia długoterminowa trwa powyżej jednego roku.  ",
    "Terapia młodzieży (16+)":
      "Osoby w wieku 16-18 lat na pierwsze spotkanie zapraszam z osobą dorosłą, rodzicem lub opiekunem. Pierwsze spotkanie to rozmowa psychoterapeutki z nastolatkiem i opiekunem. Jej celem jest poznanie oczekiwań zgłaszających się osób i motywacji nastolatka do terapii. Spotkanie z opiekunem jest także ważne ze względów formalnych – to rodzic wyraża zgodę na terapię osoby poniżej osiemnastego roku życia. Kolejne spotkania odbywają się już z nastolatkiem indywidualnie.",
  };

  const openModal = (title) => {
    setModalTitle(title);
    setModalContent(modalData[title]);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="offer-section" id="offer">
      <div className="price-section" id="price">
        <h3 className="price-header">Oferta</h3>
        <motion.div
          className="price-container price-picture"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="price-box">
            <p className="price-box-text">Konsultacja psychologiczna</p>
            <p className="price-box-text">200 zł</p>
          </div>
          <div className="price-box">
            <p className="price-box-text">Psychoterapia</p>
            <p className="price-box-text">200 zł</p>
          </div>
        </motion.div>
      </div>
      <div className="offer-container">
        {Object.keys(modalData).map((title) => (
          <div
            className="offer-box"
            onClick={() => openModal(title)}
            key={title}
          >
            <h4 className="offer-box__title">{title}</h4>
            <div className="offer-box__picture"></div>
          </div>
        ))}
      </div>
      <Modal show={isModalOpen} onHide={closeModal} title={modalTitle}>
        <p>{modalContent}</p>
      </Modal>

      <motion.div
        className="offer-container offer-picture"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <h3 className="offer-header">
          Czego spodziewać się podczas spotkań terapii indywidualnej?
        </h3>
        <p className="offer-paragraph">
          Każde spotkanie terapii indywidualnej trwa 50 minut i odbywa się raz w
          tygodniu w ustalony dzień i godzinę. Pierwsze 2-3 spotkania to
          spotkania konsultacyjne. Na pierwszym spotkaniu standardowo zadaję
          pytania dotyczące sytuacji życiowej zgłaszającej się osoby oraz
          doświadczanych przez nią trudności, z którymi chciałaby poradzić sobie
          podczas terapii. Kolejne dwa spotkania to czas dla obu stron na
          podjęcie decyzji co do dalszej współpracy. Jest to także przestrzeń na
          wstępne sformułowanie celów terapeutycznych zgłaszającej się osoby.
        </p>
      </motion.div>
    </section>
  );
}

export default Offer;
