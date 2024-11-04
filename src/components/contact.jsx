import React from "react";
import { motion } from "framer-motion";

import "../styles/contact.scss";

function Contact() {
  return (
    <>
      <div className="contact-section" id="contact">
        <h3 className="contact-header">Kontakt</h3>
        <motion.div
          className="contact-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="contact-box">
            <div className="contact-box-row">
              <a className="contact-box-link" href="tel:+48509019090">
                <div className="icon phone-icon"></div>
                <div className="contact-link-p">
                  <p>+48 501 783 847</p>
                </div>
              </a>
            </div>
            <div className="contact-box-row">
              <div>
                <a
                  className="contact-box-link"
                  href="mailto:jakoniuk.marzanna@gmail.com"
                >
                  <div className="icon email-icon"></div>
                  <p className="contact-link-p">jakoniuk.marzanna@gmail.com</p>
                </a>
              </div>
            </div>
          </div>
          <p className="map-paragraph">
            Warszawa Miedzeszyn,<br></br> ul. Agrestowa 4
          </p>
          <div className="map-container">
            <div className="map">
              <iframe
                width="100%"
                height="600"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                title="address google map"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Agrestowa%204%20warszawa+(Psychoterapia%20-%20Marzanna%20Jakoniuk%20)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              >
                <a href="https://www.gps.ie/">gps devices</a>
              </iframe>
            </div>
          </div>

          <div className="contact-color"></div>
        </motion.div>
      </div>
    </>
  );
}

export default Contact;
