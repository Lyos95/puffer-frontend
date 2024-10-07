export const PERIOD_OPTIONS = {
  FIVE_MINUTES: "5-minutes",
  TEN_MINUTES: "10-minutes",
  THIRTY_MINUTES: "30-minutes",
  ONE_HOUR: "1-hour",
  THREE_HOURS: "3-hours",
};

export const PERIOD = {
  [PERIOD_OPTIONS.FIVE_MINUTES]: {
    value: 5 * 60 * 1000,
    label: "5 Minutes",
  },
  [PERIOD_OPTIONS.TEN_MINUTES]: {
    value: 10 * 60 * 1000,
    label: "10 Minutes",
  },
  [PERIOD_OPTIONS.THIRTY_MINUTES]: {
    value: 30 * 60 * 1000,
    label: "30 Minutes",
  },
  [PERIOD_OPTIONS.ONE_HOUR]: {
    value: 60 * 60 * 1000,
    label: "1 Hour",
  },
  [PERIOD_OPTIONS.THREE_HOURS]: {
    value: 3 * 60 * 60 * 1000,
    label: "3 Hours",
  },
};
