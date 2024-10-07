"use client";

import Title from "./components/Title";
import Chart from "./components/Chart";
import PeriodPicker from "./components/PeriodPicker";
import TimeFramePicker from "./components/TimeFramePicker";
import { useEffect, useState } from "react";
import { TIME_FRAME_OPTIONS } from "./constants/timeFrames";
import { PERIOD_OPTIONS } from "./constants/period";
import { TIME_FORMAT_OPTIONS } from "./constants/timeFormat";
import TimeFormatPicker from "./components/TimeFormatPicker";
import { ConversionRateData } from "./types/conversionRateType";

export default function Home() {
  const [chartData, setChartData] = useState<ConversionRateData[] | null>(
    null
  );
  const [period, setPeriod] = useState<string>(PERIOD_OPTIONS.FIVE_MINUTES);
  const [timeframe, setTimeframe] = useState<string>(TIME_FRAME_OPTIONS.ONE_HOUR);
  const [format, setFormat] = useState<string>(TIME_FORMAT_OPTIONS.UTC);


  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `/api/conversion-rate?period=${period}&timeframe=${timeframe}`
      );

      const data = await res.json();

      setChartData(data);
    }
    fetchData();
  }, [period, timeframe]);

  return (
    <div className="p-8">
      <Title text="Welcome to the pufETH Conversion Tracker" />
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8 mb-3">
        <PeriodPicker period={period} setPeriod={setPeriod} />
        <TimeFramePicker timeframe={timeframe} setTimeframe={setTimeframe} />
        <TimeFormatPicker format={format} setFormat={setFormat} />
      </div>
      {chartData ? (
        <Chart data={chartData} timeFormat={format} chartTitle="PufETH Conversion Rate" />
      ) : (
        ""
      )}
    </div>
  );
}
