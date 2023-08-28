"use client";

import { memo, useState, useRef } from "react";
import useOutsideClick from "../../hooks/useOutsideClick";
import styles from "./Navbar.module.scss";
import clsx from "clsx";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const hamburguerButton = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setClicked(!clicked);
  };

  useOutsideClick(hamburguerButton, () => setClicked(false));

  return (
    <nav className={styles.navbar}>
      <a
        className={styles.navbarLogo}
        style={{ textDecoration: "none" }}
        href="#"
      >
        <h1>Kevin & Vanesa</h1>
      </a>
      <div
        ref={hamburguerButton}
        className={clsx(styles.hamburger, {
          [styles.hamburgerClose]: clicked,
        })}
        onClick={handleClick}
      >
        <span />
        <span />
        <span />
        <span />
      </div>
      <ul
        data-testid="nav-menu"
        className={clsx(styles.navMenu, { [styles.active]: clicked })}
      >
        <li>
          <a className={styles.navLinks} href="#start">
            Inicio
          </a>
          <a className={styles.navLinks} href="#reception">
            Recepción
          </a>
          <a className={styles.navLinks} href="#rsvp">
            RSVP
          </a>
          <a className={styles.navLinks} href="#presents">
            Presentes
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default memo(Navbar);
