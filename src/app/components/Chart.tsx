import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title as ChartTitle,
  Tooltip,
  Legend,
  Filler,
  TooltipItem,
} from "chart.js";
import {
  ConversionRateChartData,
  ConversionRateData,
} from "../types/conversionRateType";
import { TIME_FORMAT_OPTIONS } from "../constants/timeFormat";
import { convertDateStampToTimeFormat } from "../utils/time";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ChartTitle,
  Tooltip,
  Legend,
  Filler
);

interface ChartComponentProps {
  data: ConversionRateData[];
  chartTitle?: string;
  timeFormat?: string;
}

export default function ChartComponent({
  data,
  chartTitle = "Chart",
  timeFormat = TIME_FORMAT_OPTIONS.UTC,
}: ChartComponentProps) {
  if (!data) {
    return <p className="text-center text-secondary">Loading...</p>;
  }

  const chartData: ConversionRateChartData = {
    labels: data.map((point: ConversionRateData) => {
      return convertDateStampToTimeFormat(point._id, timeFormat);
    }),
    datasets: [
      {
        label: "Conversion Rate",
        data: data.map((point: ConversionRateData) => {
          const conversionRate = parseFloat(
            point.conversionRate["$numberDecimal"]
          );
          return conversionRate;
        }),
        borderColor: "#9F7AEA",
        backgroundColor: "rgba(159, 122, 234, 0.2)",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context: TooltipItem<"line">) {
            return `${context.dataset.label ?? ""}: ${context.parsed.y ?? ""}`;
          },
        },
      },
      legend: {
        position: "top" as const,
        labels: {
          color: "#6B46C1",
        },
      },
      title: {
        display: true,
        text: chartTitle,
        color: "#6B46C1",
        font: {
          size: 24,
          weight: "bold" as const,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#6B46C1",
        },
        grid: {
          color: "#E9D8FD",
        },
      },
      y: {
        ticks: {
          color: "#6B46C1",
        },
        grid: {
          color: "#E9D8FD",
        },
      },
    },
  };

  return (
    <div className="flex justify-center">
      <div className="w-full md:w-3/4 lg:w-1/2 mx-auto bg-white p-6 rounded-lg shadow-md h-[500px]">
        <Line options={{ ...options }} data={chartData} />
      </div>
    </div>
  );
}
