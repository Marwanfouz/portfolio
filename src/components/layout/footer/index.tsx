import React from "react";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const styles = require("./footer.module.scss");

type FooterProps = {};

const Footer = (props: FooterProps) => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.iconsContainer}>
        <a
          href="https://www.linkedin.com/in/marwan-fouz-a319ba252/"
          target="_blank"
          aria-label="linkedin"
          rel="noreferrer"
          className={styles.icon}
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://github.com/Marwanfouz"
          target="_blank"
          aria-label="github"
          rel="noreferrer"
          className={styles.icon}
        >
          <FaGithub />
        </a>
        <a
          href="https://x.com/Marooo_72"
          target="_blank"
          aria-label="twitter"
          rel="noreferrer"
          className={styles.icon}
        >
          <FaTwitter />
        </a>
      </div>
    </div>
  );
};

export default Footer;
