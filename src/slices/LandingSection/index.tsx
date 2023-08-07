import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

import styles from "./styles.module.css";
import clsx from "clsx";
import Image from "next/image";
import { cinzel, cinzelDecorative, manuscript } from "@/app/fonts";

export type LandingSectionProps =
  SliceComponentProps<Content.LandingSectionSlice>;

const LandingSection = ({ slice }: LandingSectionProps): JSX.Element => {
  const { subtitle } = slice.primary;
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.container}
    >
      <div className={clsx(styles.mainTitle, cinzelDecorative.className)}>
        <p className={styles.names}>Kevin</p>
        <p className={clsx(styles.connector, manuscript.className)}>&</p>
        <p className={styles.names}>Vanesa</p>

        <div className={clsx(styles.line, styles.leftLine)} />
        <div className={clsx(styles.line, styles.rightLine)} />
      </div>
      <PrismicRichText
        field={subtitle}
        components={{
          heading2: ({ children }) => (
            <h2 className={clsx(styles.subtitle, cinzel.className)}>
              {children}
            </h2>
          ),
        }}
      />
      <Image
        width={772}
        height={760}
        draggable={false}
        priority
        className={styles.topOrnament}
        src="/img/floral-ornament-hd.png"
        alt="ornament"
      />
      <Image
        width={772}
        height={760}
        draggable={false}
        priority
        className={clsx(styles.bottomOrnament, "rotated")}
        src="/img/floral-ornament-hd.png"
        alt="ornament"
      />
    </section>
  );
};

export default LandingSection;
