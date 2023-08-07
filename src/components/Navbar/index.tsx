"use client";

import { memo, useState, useRef } from "react";
import useOutsideClick from "../../hooks/useOutsideClick";
import classes from "./Navbar.module.scss";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const hamburguerButton = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setClicked(!clicked);
  };

  useOutsideClick(hamburguerButton, () => setClicked(false));

  const menuIconClasses = ["fas", classes["fa-icon"]];
  if (clicked) {
    menuIconClasses.push("fa-times");
  } else {
    menuIconClasses.push("fa-bars");
  }

  return (
    <nav className={classes.navbar}>
      <a className={classes.navbarLogo} style={{ textDecoration: "none" }}>
        <h1>Kevin & Vanesa</h1>
      </a>
      <div
        ref={hamburguerButton}
        data-testid="hamburguer-btn"
        className={classes.menuIcon}
        onClick={handleClick}
      >
        <i className={menuIconClasses.join(" ")} />X
      </div>
      <ul
        data-testid="nav-menu"
        className={
          clicked
            ? [classes.navMenu, classes.active].join(" ")
            : classes.navMenu
        }
      >
        <li>
          <a className={classes["nav-links"]}>Inicio</a>
          <a className={classes["nav-links"]}>Recepción</a>
          <a className={classes["nav-links"]}>Galería</a>
        </li>
      </ul>
    </nav>
  );
};

export default memo(Navbar);
