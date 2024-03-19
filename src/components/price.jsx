import React from "react";
import { motion } from "framer-motion";

function Price() {
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
    </>
  );
}

export default Price;
