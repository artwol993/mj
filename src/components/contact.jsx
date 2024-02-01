import React from "react";
import "../styles/contact.scss";

function Contact() {
  return (
    <>
      <div className="contact-section" id="contact">
        <div className="contact-container">
          <h3>Kontakt</h3>

          <div className="contact-box">
            <h4>Gdzie przyjmuję?</h4>
            <div className="contact-box-row">
              <div className="map">
                <div style={{ width: "100%" }}>
                  <iframe src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=ul.Wiertnicza%20118,%20Warszawa+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                </div>
                <p>ul.Wiertnicza 118, Warszawa</p>
              </div>
              <div className="map">
                <div style={{ width: "100%" }}>
                  <iframe src="https://maps.google.com/maps?width=100%25&amp;height=200&amp;hl=en&amp;q=Emilii%20Plater%2047,%20Warszawa+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                </div>
                <p>ul.Emilii Plater 47, Warszawa</p>
              </div>
            </div>
          </div>

          <div className="contact-box">
            <div className="contact-box-row">
              <a href="mailto:marzanna.jakoniuk@psychoterapia.pl">
                <h5 className="contact-link">
                  marzanna.jakoniuk@psychoterapia.pl
                </h5>
              </a>
              <a href="tel:+48509019090">
                <h5 className="contact-link">+48 509 019 090</h5>
              </a>
            </div>
          </div>

          <div className="contact-box">
            <h4>Zapraszam do zapisu online</h4>
            <div className="contact-box-row">
              <div className="contact-box-inner">
                <a
                  href="https://booksy.com/pl-pl/..."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="contact-icon booksy"></div>
                </a>
              </div>
              <div className="contact-box-inner">
                <a
                  href="https://www.znanylekarz.pl/..."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="contact-icon zl"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
