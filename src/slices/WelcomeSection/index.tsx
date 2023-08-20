"use client";
import { useEffect, useState } from "react";
import { Content, asDate } from "@prismicio/client";
import { createClient } from "@/prismicio";
import { SliceComponentProps, usePrismicClient } from "@prismicio/react";

import FloralOrnament from "@/components/FloralOrnament";
import styles from "./styles.module.scss";
import Image from "next/image";
import clsx from "clsx";
import Countdown from "@/components/Countdown";
import DividerOrnament from "@/components/DividerOrnament";

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

  const { welcomeText } = slice.primary;
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={clsx("full-screen", styles.container)}
    >
      <div className={styles.content}>
        <span className={styles.welcomeText}>{welcomeText}</span>
        <DividerOrnament />
        {weddingDate && <Countdown targetDate={weddingDate} />}
      </div>
      <FloralOrnament className={styles.ornament} rotated />
    </section>
  );
};

export default WelcomeSection;
