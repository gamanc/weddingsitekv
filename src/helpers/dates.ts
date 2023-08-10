export function formatDateToString(date: Date | null): string {
  if (date) {
    const day = date.getUTCDate();
    const year = date.getUTCFullYear();

    const monthName = new Intl.DateTimeFormat("es-ES", {
      month: "long",
    }).format(date);

    return `${monthName} ${day}, ${year}`;
  }
  return "";
}
