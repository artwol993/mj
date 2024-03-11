import React, { useState } from "react";
import Modal from "./modal";

import konsultacjaPsychologicznaImg from "../assets/konsultacja_psychologiczna.webp";
import terapia16PImg from "../assets/terapia_16.webp";
import terapiaDlugoterminowaImg from "../assets/terapia_długoterminowa.webp";
import terapiaKrotkoterminowaImg from "../assets/terapia_krótkoterminowa.webp";

function Offer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState("");

  const images = {
    "Konsultacja psychologiczna": konsultacjaPsychologicznaImg,
    "Terapia młodzieży (16+)": terapia16PImg,
    "Terapia długoterminowa": terapiaDlugoterminowaImg,
    "Terapia krótkoterminowa": terapiaKrotkoterminowaImg,
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
    <section className="offer-section">
      <div className="offer-container">
        {Object.keys(modalData).map((title) => (
          <div
            className="offer-box"
            onClick={() => openModal(title)}
            key={title}
          >
            <div
              className="offer-box__picture"
              style={{ backgroundImage: `url(${images[title]})` }}
            ></div>
            <h4 className="offer-box__title">{title}</h4>
          </div>
        ))}
      </div>

      <Modal show={isModalOpen} onHide={closeModal} title={modalTitle}>
        <p>{modalContent}</p>
      </Modal>
    </section>
  );
}

export default Offer;
