import { TIME_FORMAT_OPTIONS } from "../constants/timeFormat";


export function convertDateStampToTimeFormat(
  datestamp: number,
  format: string
): string {
  if (format === TIME_FORMAT_OPTIONS.GMT2) {
    return new Date(datestamp).toLocaleString("en-GB", {
      timeZone: "Europe/Paris",
    });
  } else if (format === TIME_FORMAT_OPTIONS.GMT1) {
    return new Date(datestamp).toLocaleString("en-GB", {
      timeZone: "Europe/Lisbon",
    });
  }
  return new Date(datestamp).toLocaleString("en-GB", { timeZone: "UTC" });
}
