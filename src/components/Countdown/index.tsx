import React, { useState, useEffect, memo, useMemo } from "react";
import { cinzel } from "@/app/fonts";
import { useWindowSize } from "react-use";
import styles from "./styles.module.scss";
import clsx from "clsx";
import ReactConfetti from "react-confetti";
import useCountdown from "@/hooks/useCountdown";

interface Props {
  targetDate: Date;
}

const Countdown = ({ targetDate }: Props) => {
  const { timeRemaining } = useCountdown(targetDate);

  return (
    <div className={clsx(styles.countdown, cinzel.className)}>
      <div className={styles["countdown-item"]}>
        <span key={timeRemaining.days} className={styles["countdown-value"]}>
          {timeRemaining.days}
        </span>
        <span className={styles["countdown-label"]}>Días</span>
      </div>
      <span className={styles["countdown-separator"]}>:</span>
      <div className={styles["countdown-item"]}>
        <span key={timeRemaining.hours} className={styles["countdown-value"]}>
          {timeRemaining.hours}
        </span>
        <span className={styles["countdown-label"]}>Horas</span>
      </div>
      <span className={styles["countdown-separator"]}>:</span>
      <div className={styles["countdown-item"]}>
        <span key={timeRemaining.minutes} className={styles["countdown-value"]}>
          {timeRemaining.minutes}
        </span>
        <span className={styles["countdown-label"]}>Minutos</span>
      </div>
      <span className={styles["countdown-separator"]}>:</span>
      <div className={styles["countdown-item"]}>
        <span key={timeRemaining.seconds} className={styles["countdown-value"]}>
          {timeRemaining.seconds}
        </span>
        <span className={styles["countdown-label"]}>Segundos</span>
      </div>
    </div>
  );
};

export default memo(Countdown);
