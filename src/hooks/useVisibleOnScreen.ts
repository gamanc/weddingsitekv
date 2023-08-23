import { useEffect, useRef } from "react";

type Props = {
  intersectionThreshold: number;
  delay: number;
  callback: () => void;
};

const useVisibleOnScreen = <T extends HTMLElement>({
  intersectionThreshold,
  delay,
  callback,
}: Props) => {
  const targetRef = useRef<T | null>(null);

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;

    if (entry.isIntersecting) {
      setTimeout(() => {
        callback();
      }, delay);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: intersectionThreshold,
    });

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  const getTargetRef = () => targetRef;

  return { getTargetRef };
};

export default useVisibleOnScreen;
