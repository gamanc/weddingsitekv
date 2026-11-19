"use client";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import clsx from "clsx";
import { DMSans, DMSerifDisplay } from "@/app/fonts";
import styles from "./DemoNoticeModal.module.scss";

interface Props {
  previewLines: string[];
  onClose: () => void;
}

const DemoNoticeModal = ({ previewLines, onClose }: Props) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return createPortal(
    <div
      className={styles.backdrop}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        className={clsx(styles.dialog, DMSans.className)}
        role="dialog"
        aria-modal="true"
        aria-labelledby="demo-notice-title"
      >
        <h2
          id="demo-notice-title"
          className={clsx(styles.title, DMSerifDisplay.className)}
        >
          ¡Gracias por confirmar!
          <span className={styles.translation}>Thanks for your RSVP!</span>
        </h2>

        <p className={styles.body}>
          Con una invitación real, los novios reciben al instante un mensaje en
          su teléfono avisándoles quién confirmó y cuántos asistirán, y su
          lista de invitados se actualiza sola.
        </p>
        <p className={styles.translation}>
          With a real invitation, the couple instantly gets a message on their
          phone letting them know who replied and how many are coming, and
          their guest list updates on its own.
        </p>

        <div className={styles.preview}>
          <p className={styles.previewLabel}>
            Así se vería el mensaje · Here&apos;s what they&apos;d see
          </p>
          <div className={styles.bubble}>
            {previewLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>

        <button
          ref={closeButtonRef}
          type="button"
          className={styles.button}
          onClick={onClose}
        >
          Entendido · Got it
        </button>
      </div>
    </div>,
    document.body
  );
};

export default DemoNoticeModal;
