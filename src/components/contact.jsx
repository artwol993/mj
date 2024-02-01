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
                  <iframe
                    width="100%"
                    height="200"
                    frameBorder="0"
                    scrolling="yes"
                    marginHeight="0"
                    marginWidth="0"
                    src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=ul.Wiertnicza%20118,%20Warszawa+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  ></iframe>
                </div>
              </div>
              <p>ul.Wiertnicza 118, Warszawa</p>
              <div className="map">
                <div style={{ width: "100%" }}>
                  <iframe
                    width="100%"
                    height="200"
                    frameborder="0"
                    scrolling="yes"
                    marginheight="0"
                    marginwidth="0"
                    src="https://maps.google.com/maps?width=100%25&amp;height=200&amp;hl=en&amp;q=Emilii%20Plater%2047,%20Warszawa+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  ></iframe>
                </div>
              </div>
              <p>ul.Emilii Plater 47, Warszawa</p>
            </div>
          </div>

          <div className="contact-box">
            <div className="contact-box-row">
              <a href="mailto:marzanna.jakoniuk@psychoterapia.pl">
                <h5>email: marzanna.jakoniuk@psychoterapia.pl</h5>
              </a>
              <a href="tel:+48509019090">
                <h5>telefon: +48 509 019 090</h5>
              </a>
            </div>
          </div>

          <div className="contact-box">
            <h4>Zapraszam do zapisu online</h4>
            <div className="contact-box-row">
              <a
                href="https://booksy.com/pl-pl/133194_poradnia-co-tam-wilanow_psychoterapia_3_warszawa/staffer/272186#ba_s=bd_1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="src/assets/Booksy-logo.svg" alt="Booksy" />
              </a>
              <a
                href="https://www.znanylekarz.pl/marzanna-jakoniuk/psycholog/warszawa#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="../assets/znanylekarz-logo.jpg" alt="Znany Lekarz" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
