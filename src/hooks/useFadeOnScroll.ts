import clsx from "clsx";
import useFadeInOut from "./useFadeInOut";
import useVisibleOnScreen from "./useVisibleOnScreen";

type Props = {
  containerClass?: string;
  visibleClass?: string;
  delay?: number;
};

const useFadeOnScroll = ({
  containerClass = "fade-in-out",
  visibleClass = "visible",
  delay = 500,
}: Props) => {
  const { setVisibility, getFadeClassNames } = useFadeInOut({
    classNames: {
      containerClass: containerClass,
      visibleClass: visibleClass,
    },
  });

  const { getTargetRef } = useVisibleOnScreen<HTMLDivElement>({
    intersectionThreshold: 0.5,
    delay,
    callback: () => setVisibility(true),
  });

  return { getFadeClassNames, getTargetRef };
};

export default useFadeOnScroll;
