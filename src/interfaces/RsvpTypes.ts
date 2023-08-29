export type AttendOptions = "noresponse" | "yes" | "no";

export type DisplayGiftRegistryOptions = "yes" | "no";

export type GuestInfo = {
  name: string;
  willAttend: AttendOptions;
  adults: number;
  kids: number;
  confirmedAdults: number;
  confirmedKids: number;
  shouldDisplayGiftRegistry: DisplayGiftRegistryOptions;
};

export interface RSVPFormData {
  willAttend: "" | "yes" | "no";
  confirmedAdults: number;
  confirmedKids: number;
  message: string;
}
