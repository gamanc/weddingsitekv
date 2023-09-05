"use client";

import { memo, useState, useRef, useEffect, useMemo } from "react";
import useOutsideClick from "../../hooks/useOutsideClick";
import { DMSerifDisplay } from "@/app/fonts";
import styles from "./Navbar.module.scss";
import clsx from "clsx";
import { MenuItem } from "@/constants/MenuItems";
import useGuestInfo from "@/hooks/useGuestInfo";
import { useSearchParams } from "next/navigation";

interface Props {
  menuItems: MenuItem[];
}

const Navbar = ({ menuItems }: Props) => {
  const [clicked, setClicked] = useState(false);
  const hamburguerButton = useRef<HTMLDivElement>(null);

  const { guestInfo, fetchGuestInfo } = useGuestInfo();
  const searchParams = useSearchParams();

  useEffect(() => {
    const key = searchParams.get("key") || "";
    if (key) {
      fetchGuestInfo(key);
    }
  }, []);

  const handleClick = () => {
    setClicked(!clicked);
  };

  useOutsideClick(hamburguerButton, () => setClicked(false));

  const navItems = useMemo(
    () =>
      menuItems.filter((item) => {
        if (guestInfo?.name) return true;
        else return item.anchorTag !== "#rsvp";
      }),
    [menuItems, guestInfo]
  );

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
          {navItems.map((item) => (
            <a
              key={item.anchorTag}
              className={styles.navLinks}
              href={item.anchorTag}
            >
              {item.label}
            </a>
          ))}
        </li>
      </ul>
    </nav>
  );
};

export default memo(Navbar);
