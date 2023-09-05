import React from "react";

import styles from "./not-found.module.scss";
import clsx from "clsx";
import DividerOrnament from "@/components/DividerOrnament";
import FloralOrnament from "@/components/FloralOrnament";
import { DMSerifDisplay, cinzelDecorative } from "./fonts";

const NotFound = () => {
  return (
    <section className={clsx("full-screen", styles.container)}>
      <div className={styles.content}>
        <span className={clsx(styles.title, cinzelDecorative.className)}>
          404
        </span>
        <span className={styles.message}>
          La página que buscas se escapó a la luna de miel. Regresa a la{" "}
          <a href="/" rel="noopener noreferrer">
            página de inicio
          </a>{" "}
          para seguir con la celebración.
        </span>
        <DividerOrnament />
      </div>
      <FloralOrnament className={styles.ornament} rotated />
    </section>
  );
};

export default NotFound;
