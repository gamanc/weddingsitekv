import Image from "next/image";
import clsx from "clsx";
import styles from "./styles.module.scss";
import { hexToCssFilters } from "@/helpers/hexToCSSFilters";

const DividerOrnament = () => {
  return (
    <Image
      className={clsx("block-touch-callout", styles.dividerOrnament)}
      style={{ filter: hexToCssFilters(styles.fontColor) }}
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
