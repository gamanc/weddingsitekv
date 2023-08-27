import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import clsx from "clsx";

import styles from "./styles.module.scss";
import DividerOrnament from "@/components/DividerOrnament";
import FloralOrnament from "@/components/FloralOrnament";
import { PrismicNextLink } from "@prismicio/next";
import { ExternalLink as ExternalLinkIcon, Gift } from "react-feather";

import Image from "next/image";

/**
 * Props for `GiftRegistrySection`.
 */
export type GiftRegistrySectionProps =
  SliceComponentProps<Content.GiftRegistrySectionSlice>;

/**
 * Component for "GiftRegistrySection" Slices.
 */
const GiftRegistrySection = ({
  slice,
}: GiftRegistrySectionProps): JSX.Element => {
  const { giftRegistryText, giftRegistryLink } = slice.primary;
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={clsx("full-screen", styles.container)}
      id="gift-registry"
    >
      <div className={styles.content}>
        <div className={styles.welcomeText}>
          <Gift size={60} color="#9e6633" />
          <PrismicRichText field={giftRegistryText} />
        </div>
        <DividerOrnament />
        <PrismicNextLink
          target="_blank"
          field={giftRegistryLink}
          className={styles.giftRegistryLink}
        >
          <Image
            width={1080}
            height={271}
            draggable={false}
            priority
            className={styles.giftRegistryLogo}
            src="/img/siman-logo.png"
            alt="Siman logo"
          />
          <span>
            Visitar mesa de regalos
            <ExternalLinkIcon size={20} color="#9e6633" />
          </span>
        </PrismicNextLink>
      </div>
      <FloralOrnament className={styles.ornament} rotated />
    </section>
  );
};

export default GiftRegistrySection;
