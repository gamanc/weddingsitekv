import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

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
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for gift_registry_section (variation:{" "}
      {slice.variation}) Slices
    </section>
  );
};

export default GiftRegistrySection;
