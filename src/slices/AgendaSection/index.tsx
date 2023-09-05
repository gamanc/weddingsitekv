import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import styles from "./styles.module.scss";
import Agenda from "@/components/Agenda";
import { Event } from "@/interfaces/AgendaTypes";

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
    </section>
  );
};

export default AgendaSection;
