import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import $ from "jquery";

function Type() {
  const [expandedBox, setExpandedBox] = useState(null);

  const toggleBox = (title) => {
    setExpandedBox(expandedBox === title ? null : title);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  const typeData = {
    "Konsultacja psychologiczna":
      "To rozmowa, podczas której psycholog zbiera informacje dotyczące zgłaszanych problemów, omawia z osobą zgłaszającą się na konsultację bieżące dolegliwości emocjonalne, relacyjne, rodzinne i ich historię. Nie proponuje gotowych rozwiązań ale pomaga dobrać najbardziej odpowiedni rodzaj dalszej pracy (np. terapia grupowa, terapia indywidualna, terapia pary, mediacje, leczenie psychiatryczne, itp.)",
    "Terapia krótkoterminowa":
      "Trwa zazwyczaj kilka miesięcy i koncentruje się na rozwiązaniu jednego zgłaszanego problemu. Jest użyteczna gdy potrzebna jest pomoc w jednej konkretnej sytuacji życiowej. Praca terapeutyczna koncentruje się na odkrywaniu i rozwijaniu zasobów oraz umiejętności osoby szukającej wsparcia. Terapeuta towarzyszy w poszukiwaniu nowych sposobów radzenia sobie z problemem i wprowadzaniu w życie zmian.",
    "Terapia długoterminowa":
      "To regularne spotkania, których cel określany jest podczas kilku pierwszych sesji. Nastawiona jest na poznanie siebie, własnych potrzeb, zrozumienie ograniczających mechanizmów, które uniemożliwiają pełne korzystanie z własnego potencjału. Dzięki relacji terapeutycznej, terapeutycznemu przymierzu osoba w psychoterapii uczy się nazywać własne potrzeby, odpowiedzialnie i z szacunkiem do własnych możliwości (uwzględniając emocje, myśli i ciało), realizować je w świcie. Moje doświadczenie pokazuje, że psychoterapia długoterminowa trwa powyżej jednego roku.  ",
    "Terapia młodzieży (16+)":
      "Osoby w wieku 16-18 lat na pierwsze spotkanie zapraszam z osobą dorosłą, rodzicem lub opiekunem. Pierwsze spotkanie to rozmowa psychoterapeutki z nastolatkiem i opiekunem. Jej celem jest poznanie oczekiwań zgłaszających się osób i motywacji nastolatka do terapii. Spotkanie z opiekunem jest także ważne ze względów formalnych – to rodzic wyraża zgodę na terapię osoby poniżej osiemnastego roku życia. Kolejne spotkania odbywają się już z nastolatkiem indywidualnie.",
  };

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + " ...";
    }
    return text;
  };

  useEffect(() => {
    $("h4, p").each(function () {
      var htmlContent = $(this).html();
      var lettersToReplace = [
        "a",
        "i",
        "o",
        "u",
        "w",
        "z",
        "A",
        "I",
        "O",
        "U",
        "W",
        "Z",
      ];

      lettersToReplace.forEach(function (letter) {
        var regex = new RegExp("(\\s)" + letter + "(\\s)", "g");
        htmlContent = htmlContent.replace(
          regex,
          '$1<span class="replaced-letter">' + letter + "&nbsp;" + "</span>"
        );
      });

      $(this).html(htmlContent);
    });
  }, [expandedBox]);

  return (
    <>
      <section className="type__section">
        <motion.div
          className="type__container"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
        >
          {Object.keys(typeData).map((title) => (
            <div
              className={`type__box ${expandedBox === title ? "expanded" : ""}`}
              onClick={() => toggleBox(title)}
              key={title}
            >
              <h4 className="type__box__title">{title}</h4>
              <div className="type__box__text">
                <p>
                  {expandedBox === title
                    ? typeData[title]
                    : truncateText(typeData[title], 110)}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </section>
    </>
  );
}

export default Type;
