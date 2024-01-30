import React from "react";
import { motion } from "framer-motion";

function Specialization() {
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
      <div className="spcialization-section" id="specialization">
        <h2>Metody leczenia</h2>
        <motion.div
          className="specialization-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <h3>Gestalt</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
            quidem, et ea itaque ex eveniet suscipit obcaecati odit rem, magnam
            temporibus iste iure dignissimos, sunt dolor possimus molestias quod
            cum! Hic doloribus reprehenderit similique odit, maxime soluta alias
            officiis aliquid iusto sunt enim possimus ex ab, modi magnam id
            deleniti fugiat ut atque placeat quibusdam, recusandae voluptatum.
            Eos, ratione eveniet. Amet odio eveniet reprehenderit illo possimus
            ipsa voluptas a? Mollitia ut reprehenderit, commodi velit,
            asperiores repellendus aperiam beatae maiores natus et eligendi
            placeat! Impedit consectetur mollitia cumque repudiandae excepturi
            ratione! Amet odio eveniet reprehenderit illo possimus ipsa voluptas
            a? Mollitia ut reprehenderit, commodi velit, asperiores repellendus
            aperiam beatae maiores natus et eligendi placeat! Impedit
            consectetur mollitia cumque repudiandae excepturi ratione!
          </p>
        </motion.div>
        <motion.div
          className="specialization-container specialization-picture"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <p>
            Esse laudantium dolore perspiciatis asperiores quam optio deleniti
          </p>
        </motion.div>
      </div>
    </>
  );
}

export default Specialization;
