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
} from "chart.js";
import { ConversionRateChartData } from "../types/conversionRateType";

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
  data: ConversionRateChartData;
  chartTitle?: string;
}

export default function ChartComponent({
  data,
  chartTitle = "Chart",
}: ChartComponentProps) {
  if (!data) {
    return <p className="text-center text-secondary">Loading...</p>;
  }

  const chartData = {
    ...data,
    labels: data.labels,
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: function(context: { dataset: { label: string; }; parsed: { y: string; }; }) {
            return `${context.dataset.label}: ${context.parsed.y}`;
        }
        }
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
        <Line
          options={{ ...options, maintainAspectRatio: false }}
          data={chartData}
        />
      </div>
    </div>
  );
}
