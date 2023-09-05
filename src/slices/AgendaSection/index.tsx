import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import styles from "./styles.module.scss";
import Agenda from "@/components/Agenda";
import { Event } from "@/interfaces/AgendaTypes";
import Image from "next/image";
import clsx from "clsx";
import { DMSerifDisplay } from "@/app/fonts";
import { hexToCssFilters } from "@/helpers/hexToCSSFilters";

/**
 * Props for `AgendaSection`.
 */
export type AgendaSectionProps =
  SliceComponentProps<Content.AgendaSectionSlice>;

/**
 * Component for "AgendaSection" Slices.
 */
const AgendaSection = ({ slice }: AgendaSectionProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.container}
      id="agenda"
    >
      <Agenda events={slice.items as Event[]} />
      <div className={clsx(styles.attire, DMSerifDisplay.className)}>
        <Image
          className={"block-touch-callout"}
          src="/icons/icon-formal-attire.png"
          alt="Formal attire required"
          style={{ filter: hexToCssFilters(styles.iconColor) }}
          width={200}
          height={200}
          priority
        />
        <PrismicRichText field={slice.primary.attireText} />
      </div>
    </section>
  );
};

export default AgendaSection;
