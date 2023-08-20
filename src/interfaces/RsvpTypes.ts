export type AttendOptions = "noresponse" | "yes" | "no";

export type GuestInfo = {
  name: string;
  willAttend: AttendOptions;
  adults: number;
  kids: number;
  confirmedAdults: number;
  confirmedKids: number;
};

export interface RSVPFormData {
  willAttend: string;
  confirmedAdults: number;
  confirmedKids: number;
  message: string;
}