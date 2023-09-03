import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { cinzel, DMSans, DMSerifDisplay } from "@/app/fonts";
import { MapPin as MapPinIcon } from "react-feather";
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
      id="reception"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={clsx("full-screen", styles.container)}
    >
      <div className={styles.innerContainer}>
        <div className={styles.locationContainer}>
          <span className={clsx(styles.eyebrowText, cinzel.className)}>
            Ceremonia
          </span>
          <h1 className={clsx(styles.locationTitle, DMSerifDisplay.className)}>
            {ceremonyLocationName}
          </h1>
          <div className={styles.line} />
          <PrismicNextLink
            className={clsx(styles.locationAddressLink, DMSans.className)}
            target="_blank"
            field={ceremonyLocationLink}
          >
            {ceremonyLocationAddress}
            <MapPinIcon size={20} color={styles.fontColor} />
          </PrismicNextLink>
        </div>

        <div
          className={clsx(
            styles.locationContainer,
            styles.bottomContainer,
            styles.alignRight
          )}
        >
          <span className={clsx(styles.eyebrowText, cinzel.className)}>
            Recepción
          </span>
          <h1 className={clsx(styles.locationTitle, DMSerifDisplay.className)}>
            {receptionLocationName}
          </h1>
          <div className={styles.line} />
          <PrismicNextLink
            className={clsx(styles.locationAddressLink, DMSans.className)}
            target="_blank"
            field={receptionLocationLink}
          >
            {receptionLocationAddress}
            <MapPinIcon size={20} color={styles.fontColor} />
          </PrismicNextLink>
        </div>
      </div>

      <FloralOrnament className={styles.ornament} flipped rotated />
    </section>
  );
};

export default LocationsSection;
