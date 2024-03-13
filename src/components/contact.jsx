import React from "react";
import "../styles/contact.scss";

function Contact() {
  return (
    <>
      <div className="contact-section" id="contact">
        <h3 className="contact-header">Kontakt</h3>
        <div className="contact-container">
          <div className="contact-box">
            <div className="contact-box-row">
              <div className="map">
                <p className="map-paragraph">
                  Przyjmuję stacjonarnie w Warszawie Miedzeszyn,{" "}
                  <b> ul. Akacjowa 4</b>
                </p>
                <div>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5649.889256183399!2d20.998597155499343!3d52.20536030460206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecccf837dfe5f%3A0x10a3621ae11bcc8f!2sAkacjowa%204%2C%2002-534%20Warszawa!5e0!3m2!1spl!2spl!4v1710278182016!5m2!1spl!2spl"
                    // width="600"
                    // height="450"
                    // style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-box__2">
            <div className="contact-box-row__2">
              <div>
                <a className="contact-box-link" href="tel:+48509019090">
                  <div className="icon phone-icon"></div>
                  <div className="contact-link-p">
                    <p>+48 509 019 090</p>
                  </div>
                </a>
                <a
                  className="contact-box-link"
                  href="mailto:marzanna.jakoniuk@psychoterapia.pl"
                >
                  <div className="icon email-icon"></div>
                  <p className="contact-link-p">
                    marzanna.jakoniuk@psychoterapia.pl
                  </p>
                </a>
              </div>
            </div>
            <div className="contact-box-row__2">
              <p className="paragraph-online">
                Pracuję także <b>online</b>, przez komunikator, skype lub google
                meet
              </p>
              <div className="contact-box-row__icons">
                <div className="icon skype-icon"></div>
                <div className="icon gm-icon"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
