import React from "react";
import { Event } from "@/interfaces/AgendaTypes";
import styles from "./styles.module.scss";
import IconImage from "../IconImage";

import { cinzel, DMSerifDisplay } from "@/app/fonts";
import clsx from "clsx";

interface AgendaProps {
  events: Event[];
}

const Agenda: React.FC<AgendaProps> = ({ events }) => {
  return (
    <div className={styles.agenda}>
      <ul className={styles.timeline}>
        {events.map((event, index) => (
          <li key={index} className={styles.event}>
            <div className={styles.eventIcon}>
              <IconImage
                icon={event.icon}
                alt={event.title}
                color={styles.fontColor}
              />
            </div>
            <div className={styles.bullet} />
            {index < events.length - 1 ? (
              <div className={styles.verticalLine} />
            ) : null}
            <div className={styles.eventContent}>
              <div className={styles.eventDetails}>
                <div className={clsx(styles.eventHour, cinzel.className)}>
                  {event.hour}
                </div>
                <div
                  className={clsx(styles.eventTitle, DMSerifDisplay.className)}
                >
                  {event.title}
                </div>
                {event.subtitle && (
                  <div className={styles.eventSubtitle}>{event.subtitle}</div>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Agenda;
