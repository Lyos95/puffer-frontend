import { NextResponse } from "next/server";
import { TIME_FRAME_OPTIONS } from "@/app/constants/timeFrames";
import { PERIOD_OPTIONS } from "@/app/constants/period";
import axios from "axios";

export async function GET(req: Request) {
  const microserviceUrl =
    "https://puffer-microservice-c76e6c18ba85.herokuapp.com/api/conversion-rate";
  const { searchParams } = new URL(req.url);
  const period = searchParams.get("period") || PERIOD_OPTIONS.FIVE_MINUTES;
  const timeframe = searchParams.get("timeframe") || TIME_FRAME_OPTIONS.ONE_HOUR;

  const params = {
    period,
    timeframe,
  };

  const { data } = await axios.get(microserviceUrl, { params });

  // Respond with the formatted data
  return NextResponse.json(data);
}
