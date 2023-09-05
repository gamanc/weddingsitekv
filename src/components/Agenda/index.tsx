import React from "react";
import { Event } from "@/interfaces/AgendaTypes";
import styles from "./styles.module.scss";
import IconImage from "../IconImage";

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
            <div className={styles.verticalLine} />
            <div className={styles.eventContent}>
              <div className={styles.eventDetails}>
                <div className={styles.eventHour}>{event.hour}</div>
                <div className={styles.eventTitle}>{event.title}</div>
                {event.subtitle && (
                  <div className={styles.eventSubtitle}>{event.subtitle}</div>
                )}
              </div>
            </div>
          </li>
        ))}
        <li className={styles.event}>
          <div className={styles.bullet} />
        </li>
      </ul>
    </div>
  );
};

export default Agenda;
