/** "May 12, 2026". Fixed locale and time zone, so server and browser always agree. */
export const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });

export const pad = (n: number) => String(n).padStart(2, "0");
