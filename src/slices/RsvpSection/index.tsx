"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import styles from "./styles.module.scss";
import clsx from "clsx";
import useGuestInfo from "@/hooks/useGuestInfo";
import RSVPForm from "@/components/RsvpForm";
import { RSVPFormData } from "@/interfaces/RsvpTypes";
import updateData from "../../../firebase/firestore/updateData";
import Loader from "@/components/Spinner";
import DividerOrnament from "@/components/DividerOrnament";
import { DMSerifDisplay } from "@/app/fonts";
import FloralOrnament from "@/components/FloralOrnament";

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
    if (data.willAttend === "yes") {
      data.confirmedAdults = parseInt(data.confirmedAdults as any);
      data.confirmedKids = parseInt(data.confirmedKids as any);
    }

    if (data.willAttend === "no") {
      data.confirmedAdults = 0;
      data.confirmedKids = 0;
    }

    await updateData("guests", guestKey, data);
    await fetchGuestInfo(guestKey);
  };

  if (!loading && !guestInfo) return <></>;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.container}
    >
      <FloralOrnament className={styles.topOrnament} flipped rotated />
      <FloralOrnament className={styles.bottomOrnament} rotated />
      <div className={styles.content}>
        {loading && <Loader />}
        {!loading && guestInfo?.name && (
          <>
            <h1 className={clsx(styles.guestName, DMSerifDisplay.className)}>
              {guestInfo.name}
            </h1>
            <DividerOrnament />
          </>
        )}
        {!loading && guestInfo?.willAttend === "noresponse" && (
          <>
            <p className={DMSerifDisplay.className}>
              Tenemos el agrado de
              {guestInfo.adults + guestInfo.kids > 1
                ? " invitarlos "
                : " invitarle "}
              a nuestro día especial.
            </p>
            <div className={styles.invitationMessage}>
              <PrismicRichText field={slice.primary.invitationMessage} />
            </div>
            <RSVPForm
              guestKey={guestKey}
              maxAdults={guestInfo.adults}
              maxKids={guestInfo.kids}
              onSubmit={onSubmit}
            />
          </>
        )}

        {!loading && guestInfo?.willAttend === "yes" && (
          <div className={styles.invitationMessage}>
            <PrismicRichText field={slice.primary.inviteAcceptedMessage} />
          </div>
        )}
        {!loading && guestInfo?.willAttend === "no" && (
          <div className={styles.invitationMessage}>
            <PrismicRichText field={slice.primary.inviteDeclinedMessage} />
          </div>
        )}
      </div>
    </section>
  );
};

export default RsvpSection;
