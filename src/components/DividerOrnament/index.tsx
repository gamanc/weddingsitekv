import Image from "next/image";
import clsx from "clsx";
import styles from "./styles.module.scss";

const DividerOrnament = () => {
  return (
    <Image
      className={clsx(
        "block-touch-callout",
        styles.dividerOrnament,
        styles.blueFilter
      )}
      src="/img/divider-ornament.png"
      width={1107}
      height={162}
      alt="divider"
      draggable={false}
      priority
    />
  );
};

export default DividerOrnament;
