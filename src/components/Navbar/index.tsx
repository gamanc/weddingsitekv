"use client";

import { memo, useState, useRef } from "react";
import useOutsideClick from "../../hooks/useOutsideClick";
import { DMSerifDisplay } from "@/app/fonts";
import styles from "./Navbar.module.scss";
import clsx from "clsx";
import { MenuItem } from "@/constants/MenuItems";

interface Props {
  menuItems: MenuItem[];
}

const Navbar = ({ menuItems }: Props) => {
  const [clicked, setClicked] = useState(false);
  const hamburguerButton = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setClicked(!clicked);
  };

  useOutsideClick(hamburguerButton, () => setClicked(false));

  return (
    <nav className={clsx(styles.navbar, DMSerifDisplay.className)}>
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
          {menuItems.map((item) => (
            <a className={styles.navLinks} href={item.anchorTag}>
              {item.label}
            </a>
          ))}
        </li>
      </ul>
    </nav>
  );
};

export default memo(Navbar);
