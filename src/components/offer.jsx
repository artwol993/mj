import React from "react";
import { motion } from "framer-motion";

function Offer() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  return (
    <>
      <div className="offer-section" id="offer">
        <h2 className="offer-header">Oferta</h2>
        <motion.div
          className="offer-container offer-picture"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="offer-box">
            <p className="offer-box-text">Konsultacja psychologiczna</p>
            <p className="offer-box-text">200 zł</p>
          </div>
          <div className="offer-box">
            <p className="offer-box-text">Psychoterapia</p>
            <p className="offer-box-text">200 zł</p>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default Offer;
