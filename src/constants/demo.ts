import type { GuestInfo, RSVPFormData } from "@/interfaces/RsvpTypes";

/**
 * Showcase invitations for portfolio visitors. They are resolved locally,
 * so they never read from or write to the guest database.
 */
export const DEMO_GUESTS: Record<string, GuestInfo> = {
  demo: {
    name: "Familia Martínez Rivera",
    adults: 2,
    kids: 2,
    confirmedAdults: 0,
    confirmedKids: 0,
    willAttend: "noresponse",
    shouldDisplayGiftRegistry: "yes",
  },
  "demo-pareja": {
    name: "Daniel y Sofía",
    adults: 2,
    kids: 0,
    confirmedAdults: 0,
    confirmedKids: 0,
    willAttend: "noresponse",
    shouldDisplayGiftRegistry: "yes",
  },
};

export const isDemoKey = (key: string | null | undefined): key is string =>
  !!key && Object.prototype.hasOwnProperty.call(DEMO_GUESTS, key);

const plural = (count: number, one: string, many: string) =>
  `${count} ${count === 1 ? one : many}`;

/** Friendly sample of the notification the couple receives on their phone. */
export const buildChatPreview = (name: string, data: RSVPFormData) => {
  const lines: string[] = [];

  if (data.willAttend === "yes") {
    lines.push(`Nueva confirmación de ${name} 🎉`);
    const people = [plural(data.confirmedAdults, "adulto", "adultos")];
    if (data.confirmedKids > 0) {
      people.push(plural(data.confirmedKids, "niño", "niños"));
    }
    lines.push(`Asistentes: ${people.join(", ")}`);
  } else {
    lines.push(`Respuesta de ${name}: no podrán asistir 💌`);
  }

  if (data.message.trim()) {
    lines.push(`“${data.message.trim()}”`);
  }

  return lines;
};

/**
 * Replaces the CMS confirmation messages for demo invitations, which
 * include the couple's real contact number.
 */
const DEMO_CONTACT_NUMBER = "+503 0000-0000";

export const DEMO_RESPONSE_MESSAGES = {
  accepted: {
    title: "Gracias por confirmar",
    body: `¡Nos alegra saber que estarás allí! Tu presencia hará nuestra celebración aún más especial. Si tienes cualquier consulta no dudes en contactarnos vía Whatsapp ${DEMO_CONTACT_NUMBER}`,
  },
  declined: {
    body: `Lamentamos escuchar que no podrás asistir y apreciamos tu sinceridad. Si hay cambios en tus planes no dudes en contactarnos vía Whatsapp ${DEMO_CONTACT_NUMBER}`,
  },
};
