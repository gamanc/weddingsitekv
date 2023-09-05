import { Icons } from "./IconTypes";

export interface Event {
  hour: string;
  title: string;
  subtitle?: string;
  icon: Icons;
}
