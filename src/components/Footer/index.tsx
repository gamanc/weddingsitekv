import React from "react";
import { Heart } from "react-feather";
import styles from "./styles.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>
          Designed and developed with{" "}
          <Heart color={styles.fontColor} size={12} /> by{" "}
          <a
            href="https://www.instagram.com/gamalielgram"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.usernameLink}
          >
            Emerson Nolasco
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
