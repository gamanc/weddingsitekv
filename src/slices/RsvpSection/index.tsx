"use client";
import { useCallback, useEffect, useState } from "react";

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
import useFadeOnScroll from "@/hooks/useFadeOnScroll";
import DemoNoticeModal from "@/components/DemoNoticeModal";
import { buildChatPreview, isDemoKey } from "@/constants/demo";
import { getGuestKey } from "@/helpers/getGuestKey";

/**
 * Props for `RsvpSection`.
 */
export type RsvpSectionProps = SliceComponentProps<Content.RsvpSectionSlice>;

/**
 * Component for "RsvpSection" Slices.
 */
const RsvpSection = ({ slice }: RsvpSectionProps): React.JSX.Element => {
  const { loading, guestInfo, fetchGuestInfo, applyLocalResponse } =
    useGuestInfo();
  const [guestKey, setGuestKey] = useState("");
  const [demoResponse, setDemoResponse] = useState<RSVPFormData | null>(null);
  const isDemo = isDemoKey(guestKey);

  const { getFadeClassNames, getTargetRef } = useFadeOnScroll({
    containerClass: "fade-in-out",
    visibleClass: clsx("visible", styles.guestNameVisible),
    delay: 250,
  });

  const {
    getFadeClassNames: getContentFadeClassNames,
    getTargetRef: getContentTargetRef,
  } = useFadeOnScroll({
    containerClass: "fade-in-out",
    visibleClass: "visible",
    delay: 400,
  });

  useEffect(() => {
    const key = getGuestKey();
    setGuestKey(key);
    fetchGuestInfo(key);
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

    if (isDemo) {
      setDemoResponse(data);
      return;
    }

    await updateData("guests", guestKey, data);
    await fetchGuestInfo(guestKey);
  };

  const closeDemoNotice = useCallback(() => {
    if (demoResponse) applyLocalResponse(demoResponse);
    setDemoResponse(null);
  }, [demoResponse, applyLocalResponse]);

  if (!loading && !guestInfo) return <></>;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.container}
      ref={getContentTargetRef()}
      id="rsvp"
    >
      <FloralOrnament className={styles.topOrnament} flipped />
      <FloralOrnament className={styles.bottomOrnament} />
      <div ref={getTargetRef()} className={styles.content}>
        {loading && <Loader />}
        {!loading && guestInfo?.name && (
          <div className={getFadeClassNames()}>
            <h1 className={clsx(styles.guestName, DMSerifDisplay.className)}>
              {guestInfo.name}
            </h1>
            {isDemo && (
              <p className={styles.demoNote}>
                Invitación de demostración · Demo invitation
              </p>
            )}
            <DividerOrnament />
          </div>
        )}
        {!loading && guestInfo?.willAttend === "noresponse" && (
          <div className={clsx(styles.formContent, getContentFadeClassNames())}>
            <p>
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
          </div>
        )}

        {!loading && guestInfo?.willAttend === "yes" && (
          <div
            className={clsx(
              styles.invitationMessage,
              styles.formContent,
              getContentFadeClassNames()
            )}
          >
            <PrismicRichText field={slice.primary.inviteAcceptedMessage} />
          </div>
        )}

        {!loading && guestInfo?.willAttend === "no" && (
          <div
            className={clsx(
              styles.invitationMessage,
              styles.formContent,
              getContentFadeClassNames()
            )}
          >
            <PrismicRichText field={slice.primary.inviteDeclinedMessage} />
          </div>
        )}
      </div>
      {demoResponse && guestInfo && (
        <DemoNoticeModal
          previewLines={buildChatPreview(guestInfo.name, demoResponse)}
          onClose={closeDemoNotice}
        />
      )}
    </section>
  );
};

export default RsvpSection;
