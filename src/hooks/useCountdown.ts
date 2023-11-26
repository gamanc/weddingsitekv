import { useCallback, useEffect, useMemo, useState } from "react";

const useCountdown = (targetDate: Date | null) => {
  const calculateTimeRemaining = useCallback(
    (date: Date | null) => {
      if (date === null) {
        return { days: null, hours: null, minutes: null, seconds: null };
      }

      const now = new Date().getTime();
      const targetTime = date.getTime();
      let timeRemaining = targetTime - now;
      timeRemaining = timeRemaining > 0 ? timeRemaining : 0;

      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      return { days, hours, minutes, seconds };
    },
    [targetDate]
  );

  const [timeRemaining, setTimeRemaining] = useState(
    calculateTimeRemaining(targetDate)
  );

  useEffect(() => {
    let animationFrameId: number;

    const updateCountdown = () => {
      setTimeRemaining(calculateTimeRemaining(targetDate));
      animationFrameId = requestAnimationFrame(updateCountdown);
    };

    animationFrameId = requestAnimationFrame(updateCountdown);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const isFinished = useMemo(() => {
    return (
      timeRemaining.days === 0 &&
      timeRemaining.hours === 0 &&
      timeRemaining.minutes === 0 &&
      timeRemaining.seconds === 0
    );
  }, [
    timeRemaining.days,
    timeRemaining.hours,
    timeRemaining.minutes,
    timeRemaining.seconds,
  ]);

  return {
    timeRemaining,
    setTimeRemaining,
    calculateTimeRemaining,
    isFinished,
  };
};

export default useCountdown;
