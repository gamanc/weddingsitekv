import { useCallback, useState } from "react";
import getDocument from "../../firebase/firestore/readData";
import { GuestInfo, RSVPFormData } from "@/interfaces/RsvpTypes";
import { DEMO_GUESTS, isDemoKey } from "@/constants/demo";

const useGuestInfo = () => {
  const [loading, setLoading] = useState(true);
  const [guestInfo, setGuestInfo] = useState<GuestInfo | null>(null);
  const [error, setError] = useState<unknown>();

  const fetchGuestInfo = async (id: string) => {
    setLoading(true);
    try {
      if (!id || id === "") {
        setLoading(false);
        return;
      }
      if (isDemoKey(id)) {
        setGuestInfo(DEMO_GUESTS[id]);
        return;
      }
      const { result, error } = await getDocument("guests", id);

      if (result?.exists()) {
        setGuestInfo(result.data() as GuestInfo);
      }

      if (error) {
        setError(error);
      }
    } catch (e) {
      setError(e);
      console.log({ e });
    } finally {
      setLoading(false);
    }
  };

  /** Shows the response locally; used by demo invitations, which are never saved. */
  const applyLocalResponse = useCallback((data: RSVPFormData) => {
    setGuestInfo((current) =>
      current && data.willAttend
        ? {
            ...current,
            willAttend: data.willAttend,
            confirmedAdults: data.confirmedAdults,
            confirmedKids: data.confirmedKids,
          }
        : current
    );
  }, []);

  return { loading, guestInfo, error, fetchGuestInfo, applyLocalResponse };
};

export default useGuestInfo;
