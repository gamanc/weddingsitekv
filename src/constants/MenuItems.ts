type SliceType =
  | "landing_section"
  | "welcome_section"
  | "locations_section"
  | "rsvp_section"
  | "gift_registry_section"
  | "gallery_section";

export interface MenuItem {
  label: string;
  anchorTag: string;
}

type AnchorTagMap = {
  [Key in SliceType]: MenuItem;
};

export const AnchorTag: AnchorTagMap = {
  landing_section: { label: "", anchorTag: "#" },
  welcome_section: { label: "Inicio", anchorTag: "#welcome" },
  locations_section: { label: "Recepción", anchorTag: "#reception" },
  rsvp_section: { label: "RSVP", anchorTag: "#rsvp" },
  gift_registry_section: { label: "Presentes", anchorTag: "#presents" },
  gallery_section: { label: "Galería", anchorTag: "#gallery" },
};
