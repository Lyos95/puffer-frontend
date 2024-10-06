import { Period, PeriodOptions } from "../constants/period";

interface PeriodPickerProps {
  period: string;
  setPeriod: (value: string) => void;
}

const PeriodPicker: React.FC<PeriodPickerProps> = ({ period, setPeriod }) => {
  const generateOptions = () => {
    return Object.values(PeriodOptions).map((period) => {
      return <option key={period} value={period}>{Period[period].label}</option>;
    });
  };

  return (
    <div>
      <label htmlFor="period" className="mr-2 text-primary font-bold">
        Period:
      </label>
      <select
        id="period"
        value={period}
        onChange={(e) => setPeriod(e.target.value)}
        className="p-2 border rounded-md focus:outline-none focus:ring focus:border-primary"
      >
        {generateOptions()}
      </select>
    </div>
  );
};

export default PeriodPicker;
