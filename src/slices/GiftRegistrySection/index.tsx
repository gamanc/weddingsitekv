import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { DMSans } from "@/app/fonts";
import clsx from "clsx";

import styles from "./styles.module.scss";
import DividerOrnament from "@/components/DividerOrnament";
import FloralOrnament from "@/components/FloralOrnament";
import { PrismicNextLink } from "@prismicio/next";
import { ExternalLink as ExternalLinkIcon, Gift } from "react-feather";

import Image from "next/image";
import EnvelopeIcon from "@/icons/Envelope";

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
  const { monetaryPresentText, giftRegistryText, giftRegistryLink } =
    slice.primary;
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.container}
      id="presents"
    >
      <div className={clsx(styles.content, DMSans.className)}>
        <div className={styles.texts}>
          <EnvelopeIcon size={60} color="#a0550f" />
          <PrismicRichText field={monetaryPresentText} />
          <DividerOrnament />
        </div>

        <div className={styles.texts}>
          <Gift size={60} color="#a0550f" />
          <PrismicRichText field={giftRegistryText} />
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
      </div>
      <FloralOrnament className={styles.ornament} />
    </section>
  );
};

export default GiftRegistrySection;
