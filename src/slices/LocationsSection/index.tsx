import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `LocationsSection`.
 */
export type LocationsSectionProps =
  SliceComponentProps<Content.LocationsSectionSlice>;

/**
 * Component for "LocationsSection" Slices.
 */
const LocationsSection = ({ slice }: LocationsSectionProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for locations_section (variation: {slice.variation})
      Slices
    </section>
  );
};

export default LocationsSection;
