import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { cinzel, DMSans } from "@/app/fonts";
import clsx from "clsx";

import styles from "./styles.module.scss";
import { PrismicNextLink } from "@prismicio/next";
import FloralOrnament from "@/components/FloralOrnament";

/**
 * Props for `LocationsSection`.
 */
export type LocationsSectionProps =
  SliceComponentProps<Content.LocationsSectionSlice>;

/**
 * Component for "LocationsSection" Slices.
 */
const LocationsSection = ({ slice }: LocationsSectionProps): JSX.Element => {
  const {
    ceremonyLocationName,
    ceremonyLocationAddress,
    ceremonyLocationLink,
    receptionLocationName,
    receptionLocationAddress,
    receptionLocationLink,
  } = slice.primary;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={clsx("full-screen", styles.container)}
    >
      <div className={styles.innerContainer}>
        <div className={styles.locationContainer}>
          <span className={clsx(styles.eyebrowText, cinzel.className)}>
            Ceremonia
          </span>
          <h1 className={styles.locationTitle}>{ceremonyLocationName}</h1>
          <div className={styles.line} />
          <PrismicNextLink
            className={clsx(styles.locationAddressLink, DMSans.className)}
            target="_blank"
            field={ceremonyLocationLink}
          >
            {ceremonyLocationAddress}
          </PrismicNextLink>
        </div>

        <div className={clsx(styles.locationContainer, styles.bottomContainer)}>
          <span className={clsx(styles.eyebrowText, cinzel.className)}>
            Recepción
          </span>
          <h1 className={styles.locationTitle}>{receptionLocationName}</h1>
          <div className={styles.line} />
          <PrismicNextLink
            className={clsx(styles.locationAddressLink, DMSans.className)}
            target="_blank"
            field={receptionLocationLink}
          >
            {receptionLocationAddress}
          </PrismicNextLink>
        </div>
      </div>

      <FloralOrnament className={styles.ornament} flipped rotated />
    </section>
  );
};

export default LocationsSection;
