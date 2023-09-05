"use client";
import { Content, asText } from "@prismicio/client";
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
import useGuestInfo from "@/hooks/useGuestInfo";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { hexToCssFilters } from "@/helpers/hexToCSSFilters";

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
  const { loading, guestInfo, fetchGuestInfo } = useGuestInfo();
  const searchParams = useSearchParams();

  useEffect(() => {
    const key = searchParams.get("key");
    fetchGuestInfo(key || "");
  }, []);

  const shouldDisplayGiftRegistry = useMemo(
    () => !loading && guestInfo?.shouldDisplayGiftRegistry === "yes",
    [loading, guestInfo]
  );

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
          <EnvelopeIcon size={60} color={styles.fontColor} />
          <span
            className={clsx({
              [styles.largeText]: !shouldDisplayGiftRegistry,
            })}
          >
            {asText(monetaryPresentText)}
          </span>
          <DividerOrnament />
        </div>

        {shouldDisplayGiftRegistry && (
          <div className={styles.texts}>
            <Gift size={60} color={styles.fontColor} />
            <span>{asText(giftRegistryText)}</span>
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
                style={{ filter: hexToCssFilters(styles.fontColor) }}
                className={clsx(styles.giftRegistryLogo)}
                src="/img/siman-logo.png"
                alt="Siman logo"
              />
              <span>
                Visitar mesa de regalos
                <ExternalLinkIcon size={20} color={styles.fontColor} />
              </span>
            </PrismicNextLink>
          </div>
        )}
      </div>
      <FloralOrnament className={styles.ornament} />
    </section>
  );
};

export default GiftRegistrySection;
