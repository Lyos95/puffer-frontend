"use client";

import Title from "./components/Title";
import Chart from "./components/Chart";
import PeriodPicker from "./components/PeriodPicker";
import TimeFramePicker from "./components/TimeFramePicker";
import { useEffect, useState } from "react";
import { TimeFrameOptions } from "./constants/timeFrames";
import { PeriodOptions } from "./constants/period";
import { TIME_FORMAT_OPTIONS } from "./constants/timeFormat";
import TimeFormatPicker from "./components/TimeFormatPicker";
import { ConversionRateChartData } from "./types/conversionRateType";

export default function Home() {
  const [chartData, setChartData] = useState<ConversionRateChartData | null>(
    null
  );
  const [period, setPeriod] = useState<string>(PeriodOptions.FIVE_MINUTES);
  const [timeframe, setTimeframe] = useState<string>(TimeFrameOptions.ONE_HOUR);
  const [format, setFormat] = useState<string>(TIME_FORMAT_OPTIONS.LOCAL);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `/api/data?period=${period}&timeframe=${timeframe}&format=${format}`
      );
      const data = await res.json();
      setChartData(data);
    }
    fetchData();
  }, [period, timeframe, format]);

  return (
    <div className="p-8">
      <Title text="Welcome to the pufETH Conversion Tracker" />
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8 mb-3">
        <PeriodPicker period={period} setPeriod={setPeriod} />
        <TimeFramePicker timeframe={timeframe} setTimeframe={setTimeframe} />
        <TimeFormatPicker format={format} setFormat={setFormat} />
      </div>
      {chartData ? (
        <Chart data={chartData} chartTitle="PufETH Conversion Rate" />
      ) : (
        ""
      )}
    </div>
  );
}
