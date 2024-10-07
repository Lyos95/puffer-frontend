export const TIME_FRAME_OPTIONS = {
  ONE_HOUR: "1-hour",
  FIVE_HOURS: "5-hours",
  ONE_DAY: "1-day",
  THREE_DAYS: "3-days",
};

export const TIME_FRAME = {
  [TIME_FRAME_OPTIONS.ONE_HOUR]: {
    type: "hour",
    value: 1,
    label: "1 Hour",
  },
  [TIME_FRAME_OPTIONS.FIVE_HOURS]: {
    type: "hour",
    value: 5,
    label: "5 Hours",
  },
  [TIME_FRAME_OPTIONS.ONE_DAY]: {
    type: "day",
    value: 1,
    label: "1 Day",
  },
  [TIME_FRAME_OPTIONS.THREE_DAYS]: {
    type: "day",
    value: 3,
    label: "3 Days",
  },
};
