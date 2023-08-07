import { RefObject, useEffect } from "react";

export default function useOutsideClick(
  ref: RefObject<HTMLElement>,
  callback: () => void
): void {
  const handleClick = (event: Event) => {
    if (
      event.target instanceof HTMLElement &&
      ref.current &&
      !ref.current.contains(event.target)
    ) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
}
