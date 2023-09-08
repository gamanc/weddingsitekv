"use client";
import { useEffect, useState } from "react";
import { Content, asDate } from "@prismicio/client";
import { createClient } from "@/prismicio";
import {
  PrismicRichText,
  SliceComponentProps,
  usePrismicClient,
} from "@prismicio/react";
import clsx from "clsx";

import FloralOrnament from "@/components/FloralOrnament";
import Countdown from "@/components/Countdown";
import DividerOrnament from "@/components/DividerOrnament";
import styles from "./styles.module.scss";

export type WelcomeSectionProps =
  SliceComponentProps<Content.WelcomeSectionSlice>;

const WelcomeSection = ({ slice }: WelcomeSectionProps): JSX.Element => {
  const [weddingDate, setWeddingDate] = useState<Date | null>(null);
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
      id="welcome"
    >
      <div className={styles.content}>
        <div className={styles.welcomeText}>
          <PrismicRichText field={slice.primary.welcomeText} />
        </div>
        <DividerOrnament />
        {weddingDate && <Countdown targetDate={weddingDate} />}
      </div>
      <FloralOrnament className={styles.ornament} rotated />
    </section>
  );
};

export default WelcomeSection;
