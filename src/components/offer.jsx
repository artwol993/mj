import React from "react";

function Offer() {
  return (
    <section className="offer-section">
      <h3 className="offer-header">
        Czego spodziewać się podczas spotkań terapii indywidualnej?
      </h3>
      <p className="offer-paragraph">
        Każde spotkanie terapii indywidualnej trwa 50 minut i odbywa się raz w
        tygodniu, w ustalony dzień i godzinę. Pierwsze 2-3 spotkania to
        spotkania konsultacyjne. Na pierwszym spotkaniu standardowo zadaję
        szereg pytań dotyczących sytuacji życiowej zgłaszającej się osoby oraz
        doświadczanych przez nią trudności, z którymi chciałaby poradzić sobie w
        terapii. Podczas kolejnych spotkań jest czas dla obu stron na podjęcie
        decyzji co do dalszej współpracy. Jest to także przestrzeń na wstępne
        sformułowanie celów terapeutycznych zgłaszającej się osoby.
      </p>
      <div className="offer-container">
        <div className="offer-box">
          <div className="offer-box__picture"></div>
          <h4 className="offer-box__title">Konsultacja psychologiczna</h4>
        </div>
        <div className="offer-box">
          <div className="offer-box__picture"></div>
          <h4 className="offer-box__title">Terapia krótkoterminowa</h4>
        </div>
        <div className="offer-box">
          <div className="offer-box__picture"></div>
          <h4 className="offer-box__title">Terapia długoterminowa</h4>
        </div>
        <div className="offer-box">
          <div className="offer-box__picture"></div>
          <h4 className="offer-box__title">Terapia młodzieży (16+)</h4>
        </div>
      </div>
    </section>
  );
}

export default Offer;
