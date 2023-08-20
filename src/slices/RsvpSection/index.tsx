"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import styles from "./styles.module.scss";
import clsx from "clsx";
import useGuestInfo from "@/hooks/useGuestInfo";
import RSVPForm from "@/components/RsvpForm";
import { RSVPFormData } from "@/interfaces/RsvpTypes";
import updateData from "../../../firebase/firestore/updateData";
import Loader from "@/components/Spinner";
import DividerOrnament from "@/components/DividerOrnament";

/**
 * Props for `RsvpSection`.
 */
export type RsvpSectionProps = SliceComponentProps<Content.RsvpSectionSlice>;

/**
 * Component for "RsvpSection" Slices.
 */
const RsvpSection = ({ slice }: RsvpSectionProps): JSX.Element => {
  const { loading, guestInfo, fetchGuestInfo } = useGuestInfo();
  const [guestKey, setGuestKey] = useState("");
  const searchParams = useSearchParams();

  useEffect(() => {
    const key = searchParams.get("key");
    setGuestKey(key || "");
    fetchGuestInfo(key || "");
  }, []);

  const onSubmit = async (data: RSVPFormData) => {
    data.confirmedAdults = parseInt(data.confirmedAdults as any);
    data.confirmedKids = parseInt(data.confirmedKids as any);

    await updateData("guests", guestKey, data);
    fetchGuestInfo(guestKey);
  };

  if (!loading && !guestInfo) return <></>;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.container}
    >
      <div className={styles.content}>
        {loading && <Loader />}
        {!loading && guestInfo?.willAttend === "noresponse" && (
          <>
            <h1 className={styles.guestName}>{guestInfo.name}</h1>
            <DividerOrnament />
            <p>
              Tenemos el agrado de
              {guestInfo.adults + guestInfo.kids > 1
                ? " invitarlos "
                : " invitarle "}
              a nuestro día especial.
            </p>
            <p className={styles.invitationMessage}>
              Tu respuesta es crucial para nuestros preparativos. ¿Nos harías
              felices confirmando tu asistencia? Esperamos tu respuesta con
              emoción.
            </p>
            <RSVPForm
              guestKey={guestKey}
              maxAdults={guestInfo.adults}
              maxKids={guestInfo.kids}
              onSubmit={onSubmit}
            />
          </>
        )}

        {!loading && guestInfo?.willAttend === "yes" && (
          <div>Thanks for confirming, see you there!</div>
        )}
        {!loading && guestInfo?.willAttend === "no" && (
          <div>Sorry to hear that, we would like you to join us</div>
        )}
      </div>
    </section>
  );
};

export default RsvpSection;
