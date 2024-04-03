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
      <div className="price__section" id="price">
        <h3 className="price__title">Cennik</h3>
        <motion.div
          className="price__container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <p className="price__text"> Psychoterapia - 200 zł </p>
          <p className="price__text">Konsultacja psychologiczna - 200 zł</p>
        </motion.div>
      </div>
    </>
  );
}

export default Price;
