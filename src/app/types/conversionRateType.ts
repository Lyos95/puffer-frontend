export type ConversionRateChartData = {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      borderColor: string;
      backgroundColor: string;
    }[];
  };

  export type ConversionRateData = {
    _id: number;
    conversionRate: {
      $numberDecimal: string;
    };
  };
  