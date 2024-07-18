import React from "react";
import WaveTitle from "@/components/library/waveTitle";
import RevealOnScroll from "@/components/library/revealOnScroll";
import { FaChevronDown } from "react-icons/fa";
import { motion } from "framer-motion";

import styles from "./introSection.module.scss";

const IntroSection = () => {
  const introTextAnimation = {
    hidden: {
      opacity: 0,
      y: "0.25em",
    },
    visible: {
      opacity: 1,
      y: "0em",
      transition: {
        duration: 0.75,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  const arrowAnimation = {
    bottom: {
      y: 0,
    },
    top: {
      y: 20,
    },
  };

  return (
    <section>
      <div className={styles.aboutContainer}>
        <div className={styles.introContainer}>
          <WaveTitle
            title="Hello, my name is"
            customClassName={styles.introText}
            customAnimation={introTextAnimation}
            initialDelay={2}
            wordDelay={0.1}
          />
          <WaveTitle
            title="Marwan Fouz."
            customClassName={styles.introName}
            initialDelay={12}
            wordDelay={0.1}
          />

          <RevealOnScroll delay={2.2}>
            <p className={styles.aboutText}>
              I&apos;m an web developer who likes to make
              random projects and put them on the internet.
            </p>
          </RevealOnScroll>
        </div>
      </div>
      <RevealOnScroll delay={3.5} once={false}>
        <motion.span
          className={styles.aboutPrompt}
          variants={arrowAnimation}
          initial={{ y: 0 }}
          animate={{ y: [10, 0] }}
          transition={{
            repeat: Infinity,
            duration: 0.75,
            repeatType: "reverse",
            ease: "easeIn",
          }}
        >
          <FaChevronDown />
        </motion.span>
      </RevealOnScroll>
    </section>
  );
};

export default IntroSection;
