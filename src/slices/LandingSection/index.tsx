"use client";
import { Content, asDate } from "@prismicio/client";
import { SliceComponentProps, usePrismicClient } from "@prismicio/react";
import clsx from "clsx";

import FloralOrnament from "@/components/FloralOrnament";
import { cinzel, cinzelDecorative, manuscript } from "@/app/fonts";
import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import { createClient } from "@/prismicio";
import { formatDateToString } from "@/helpers/dates";

export type LandingSectionProps =
  SliceComponentProps<Content.LandingSectionSlice>;

const LandingSection = ({ slice }: LandingSectionProps): JSX.Element => {
  const [weddingDate, setWeddingDate] = useState<Date | null>(null);

  const weddingDateString = formatDateToString(weddingDate);

  const client = usePrismicClient(createClient());
  useEffect(() => {
    const getConfigs = async () => {
      const configuration = await client.getSingle("siteConfiguration");
      const { weddingDate } = configuration.data;
      setWeddingDate(asDate(weddingDate));
    };

    getConfigs();
  }, []);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={clsx("full-screen", styles.container)}
      id="landing"
    >
      <div className={clsx(styles.mainTitle, cinzelDecorative.className)}>
        <p className={styles.names}>Kevin</p>
        <p className={clsx(styles.connector, manuscript.className)}>&</p>
        <p className={styles.names}>Vanesa</p>

        <div className={clsx(styles.line, styles.leftLine)} />
        <div className={clsx(styles.line, styles.rightLine)} />
      </div>
      <h2
        className={clsx(styles.subtitle, cinzel.className, {
          [styles.fadeIn]: weddingDateString,
        })}
      >
        {weddingDateString}
      </h2>
      <FloralOrnament className={styles.topOrnament} />
      <FloralOrnament className={styles.bottomOrnament} rotated />
    </section>
  );
};

export default LandingSection;
