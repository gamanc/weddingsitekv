import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import styles from "./styles.module.scss";
import { PrismicNextImage } from "@prismicio/next";
import clsx from "clsx";
import FloralOrnament from "@/components/FloralOrnament";
/**
 * Props for `GallerySection`.
 */
export type GallerySectionProps =
  SliceComponentProps<Content.GallerySectionSlice>;

/**
 * Component for "GallerySection" Slices.
 */

const GallerySection = ({ slice }: GallerySectionProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.container}
      id="gallery"
    >
      <div className={styles.imageGrid}>
        {slice.items.map((imageItem, index) => (
          <div
            key={index}
            className={clsx(styles.imageContainer, {
              [styles.left]: index % 2 === 0,
              [styles.right]: index % 2 === 1,
              [styles.overlap]: index > 0,
            })}
          >
            <PrismicNextImage
              field={imageItem.image}
              className="block-touch-callout"
            />
            <span className={styles.label}>{imageItem.label}</span>
          </div>
        ))}
      </div>
      <FloralOrnament className={styles.topOrnament} />
      {slice.items.length % 2 === 0 ? (
        <FloralOrnament className={styles.bottomLeftOrnament} flipped />
      ) : (
        <FloralOrnament className={styles.bottomOrnament} rotated flipped />
      )}
    </section>
  );
};

export default GallerySection;
