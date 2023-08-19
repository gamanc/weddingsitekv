import { useState } from "react";
import getDocument from "../../firebase/firestore/readData";
import { GuestInfo } from "@/interfaces/RsvpTypes";

const useGuestInfo = () => {
  const [loading, setLoading] = useState(true);
  const [guestInfo, setGuestInfo] = useState<GuestInfo | null>(null);
  const [error, setError] = useState<unknown>();

  const fetchGuestInfo = async (id: string) => {
    setLoading(true);
    if (!id || id === "") {
      setLoading(false);
      return;
    }
    const { result, error } = await getDocument("guests", id);

    if (result?.exists()) {
      setGuestInfo(result.data() as GuestInfo);
    }

    if (error) {
      setError(error);
    }
    setLoading(false);
  };

  return { loading, guestInfo, error, fetchGuestInfo };
};

export default useGuestInfo;
