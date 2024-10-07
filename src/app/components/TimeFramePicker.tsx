import { TIME_FRAME, TIME_FRAME_OPTIONS } from "../constants/timeFrames";

interface TimeFramePickerProps {
  timeframe: string;
  setTimeframe: (value: string) => void;
}

const TimeFramePicker: React.FC<TimeFramePickerProps> = ({
  timeframe,
  setTimeframe,
}) => {
  const generateOptions = () => {
    return Object.values(TIME_FRAME_OPTIONS).map((timeframe) => {
      return <option key={timeframe}  value={timeframe}>{TIME_FRAME[timeframe].label}</option>;
    });
  };

  return (
    <div>
      <label htmlFor="timeframe" className="mr-2 text-primary font-bold">
        Timeframe:
      </label>
      <select
        id="timeframe"
        value={timeframe}
        onChange={(e) => setTimeframe(e.target.value)}
        className="p-2 border rounded-md focus:outline-none focus:ring focus:border-primary"
      >
        {generateOptions()}
      </select>
    </div>
  );
};

export default TimeFramePicker;
