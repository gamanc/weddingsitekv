import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import clsx from "clsx";

import FloralOrnament from "@/components/FloralOrnament";
import { cinzel, cinzelDecorative, manuscript } from "@/app/fonts";
import styles from "./styles.module.scss";

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
      <FloralOrnament className={styles.topOrnament} />
      <FloralOrnament className={styles.bottomOrnament} rotated />
    </section>
  );
};

export default LandingSection;
