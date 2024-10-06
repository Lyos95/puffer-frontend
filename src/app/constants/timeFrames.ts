export const TimeFrameOptions = {
  ONE_HOUR: "1-hour",
  FIVE_HOURS: "5-hours",
  ONE_DAY: "1-day",
  THREE_DAYS: "3-days",
};

export const TimeTypes = {
  DAY: "day",
  HOUR: "hour",
  YEAR: "year",
};
export const TimeFrame = {
  [TimeFrameOptions.ONE_HOUR]: {
    type: "hour",
    value: 1,
    label: "1 Hour",
  },
  [TimeFrameOptions.FIVE_HOURS]: {
    type: "hour",
    value: 5,
    label: "5 Hours",
  },
  [TimeFrameOptions.ONE_DAY]: {
    type: "day",
    value: 1,
    label: "1 Day",
  },
  [TimeFrameOptions.THREE_DAYS]: {
    type: "day",
    value: 3,
    label: "3 Days",
  },
};
