import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

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
    >
      {slice.items.map((imageItem) => (
        <p>{imageItem.label}</p>
      ))}
    </section>
  );
};

export default GallerySection;
