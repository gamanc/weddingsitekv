import {
  Cinzel,
  Cinzel_Decorative,
  Vujahday_Script,
  DM_Serif_Display,
  DM_Serif_Text,
} from "next/font/google";

export const cinzel = Cinzel({
  subsets: ["latin"],
  weight: "500",
  display: "swap",
});
export const cinzelDecorative = Cinzel_Decorative({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});
export const manuscript = Vujahday_Script({
  weight: "400",
  subsets: ["latin-ext"],
  display: "swap",
});
export const DMSerifText = DM_Serif_Text({
  weight: "400",
  subsets: ["latin-ext"],
  display: "swap",
});
export const DMSerifDisplay = DM_Serif_Display({
  weight: "400",
  subsets: ["latin-ext"],
  display: "swap",
});
