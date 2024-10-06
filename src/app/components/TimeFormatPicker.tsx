import { TIME_FORMAT_OPTIONS, TimeFormat } from "../constants/timeFormat";

interface TimeFormatPickerProps {
  format: string;
  setFormat: (value: string) => void;
}

const TimeFormatPicker: React.FC<TimeFormatPickerProps> = ({
  format,
  setFormat,
}) => {
  const generateOptions = () => {
    return Object.values(TIME_FORMAT_OPTIONS).map((format) => {
      return <option key={format} value={format}>{TimeFormat[format].label}</option>;
    });
  };

  return (
    <div>
      <label htmlFor="timeFormat" className="mr-2 text-primary font-bold">
        Format:
      </label>
      <select
        id="timeFormat"
        value={format}
        onChange={(e) => setFormat(e.target.value)}
        className="p-2 border rounded-md focus:outline-none focus:ring focus:border-primary"
      >
        {generateOptions()}
      </select>
    </div>
  );
};

export default TimeFormatPicker;
