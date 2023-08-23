import clsx from "clsx";
import { useState } from "react";

type Props = {
  classNames: {
    containerClass: string;
    visibleClass: string;
  };
};

const useFadeInOut = ({
  classNames: { containerClass, visibleClass },
}: Props) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const setVisibility = (value: boolean) => setIsVisible(value);

  const getFadeClassNames = () => {
    return clsx(containerClass, { [visibleClass]: isVisible });
  };

  return { isVisible, toggleVisibility, setVisibility, getFadeClassNames };
};

export default useFadeInOut;
