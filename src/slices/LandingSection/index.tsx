import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `LandingSection`.
 */
export type LandingSectionProps =
  SliceComponentProps<Content.LandingSectionSlice>;

/**
 * Component for "LandingSection" Slices.
 */
const LandingSection = ({ slice }: LandingSectionProps): JSX.Element => {
  const { title, subtitle, backgroundImage } = slice.primary;
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={title} />
      <PrismicRichText field={subtitle} />
      <PrismicNextImage
        style={{ width: "100vw", height: "300px", objectFit: "cover" }}
        field={backgroundImage}
      />
    </section>
  );
};

export default LandingSection;
