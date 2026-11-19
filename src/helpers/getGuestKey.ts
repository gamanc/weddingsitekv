/** Reads the invitation key from `?key=` on the client. */
export const getGuestKey = (): string => {
  if (typeof window === "undefined") return "";
  return new URLSearchParams(window.location.search).get("key") || "";
};
