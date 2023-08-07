import { Cinzel, Cinzel_Decorative, Vujahday_Script } from "next/font/google";

export const cinzel = Cinzel({
  subsets: ["latin"],
  weight: "600",
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
