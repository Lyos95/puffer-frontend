import { Period } from "../constants/period";
import { TIME_FORMAT_OPTIONS } from "../constants/timeFormat";
import { TimeFrame, TimeTypes } from "../constants/timeFrames";

export function getDateRange(timeframe: string): {
  startDate: Date;
  endDate: Date;
} {
  const endDate = new Date();
  const startDate = new Date();

  // Calculate the start date based on the timeframe
  switch (TimeFrame[timeframe].type) {
    case TimeTypes.HOUR:
      startDate.setHours(endDate.getHours() - TimeFrame[timeframe].value);
      break;
    case TimeTypes.DAY:
      startDate.setDate(endDate.getDate() - TimeFrame[timeframe].value);
      break;
    default:
      startDate.setDate(endDate.getDate() - 1);
  }

  return { startDate, endDate };
}

export function getPeriod(period: string): Number {
  // Calculate the interval based on the period
  return Period[period].value;
}

export function convertDateStampToTimeFormat(
  datestamp: number,
  format: string
): string {
  if (format === TIME_FORMAT_OPTIONS.LOCAL) {
    return new Date(datestamp).toLocaleString("en-GB");
  }
  return new Date(datestamp).toLocaleString("en-GB", { timeZone: "UTC" });
}
