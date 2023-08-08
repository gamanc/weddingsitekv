"use client";
import { useEffect, useState } from "react";
import { Content, asDate } from "@prismicio/client";
import { createClient } from "@/prismicio";
import { SliceComponentProps, usePrismicClient } from "@prismicio/react";

import FloralOrnament from "@/components/FloralOrnament";
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

  const { welcomeText } = slice.primary;
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.container}
    >
      <h3 className={styles.welcomeText}>{welcomeText}</h3>
      {weddingDate ? <h1>{weddingDate.toLocaleDateString()}</h1> : null}
      <FloralOrnament className={styles.ornament} rotated />
    </section>
  );
};

export default WelcomeSection;
