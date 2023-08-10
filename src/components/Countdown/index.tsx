import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";

interface Props {
  targetDate: Date;
}

const Countdown = ({ targetDate }: Props) => {
  const calculateTimeRemaining = () => {
    const now = new Date().getTime();
    const targetTime = targetDate.getTime();
    const timeRemaining = targetTime - now;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.countdown}>
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

export default Countdown;
