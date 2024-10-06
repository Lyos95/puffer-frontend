export const PeriodOptions = {
  FIVE_MINUTES: "5-minutes",
  TEN_MINUTES: "10-minutes",
  THIRTY_MINUTES: "30-minutes",
  ONE_HOUR: "1-hour",
  THREE_HOURS: "3-hours",
};

export const TimeTypes = {
  DAY: "day",
  HOUR: "hour",
};

export const Period = {
  [PeriodOptions.FIVE_MINUTES]: {
    value: 5 * 60 * 1000,
    label: "5 Minutes",
  },
  [PeriodOptions.TEN_MINUTES]: {
    value: 10 * 60 * 1000,
    label: "10 Minutes",
  },
  [PeriodOptions.THIRTY_MINUTES]: {
    value: 30 * 60 * 1000,
    label: "30 Minutes",
  },
  [PeriodOptions.ONE_HOUR]: {
    value: 60 * 60 * 1000,
    label: "1 Hour",
  },
  [PeriodOptions.THREE_HOURS]: {
    value: 3 * 60 * 60 * 1000,
    label: "3 Hours",
  },
};
