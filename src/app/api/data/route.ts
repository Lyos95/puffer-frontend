import mongoose from 'mongoose';
import { connectToDatabase } from '../utils/connectToDatabase ';
import { NextResponse } from 'next/server';
import { convertDateStampToTimeFormat, getDateRange, getPeriod } from '@/app/utils/time';
import { TimeFrameOptions } from '@/app/constants/timeFrames';
import { PeriodOptions } from '@/app/constants/period';
import { TIME_FORMAT_OPTIONS } from '@/app/constants/timeFormat';

const conversionRateSchema = new mongoose.Schema({
  conversionRate: { type: mongoose.Schema.Types.Decimal128, required: true },
  supply: { type: String, required: true },
  assets: { type: String, required: true },
  timestamp: { type: Date, default: Date.now, required: true },
});

const ConversionRate = mongoose.models.ConversionRate || mongoose.model('ConversionRate', conversionRateSchema);

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const period = searchParams.get('period') || PeriodOptions.FIVE_MINUTES;
  const timeframe = searchParams.get('timeframe') || TimeFrameOptions.ONE_HOUR;
  const timeformat = searchParams.get('format') || TIME_FORMAT_OPTIONS.LOCAL;

  await connectToDatabase();
  const {startDate, endDate} = getDateRange(timeframe);
  const groupByPeriod = getPeriod(period);

  // Retrieving and grouping data points by period & timeFrame from the database
  const data = await ConversionRate.aggregate([
    {
      $match: {
        timestamp: {
          $gte: startDate,
          $lte: endDate,
        },
      },
    },
    {
      $group: {
        _id: {
          $toDate: {
            $subtract: [
              { $toLong: "$timestamp" },
              { $mod: [{ $toLong: "$timestamp" }, groupByPeriod] },
            ],
          },
        },
        conversionRate: { $avg: "$conversionRate" },
      },
    },
    {
      $sort: { _id: 1 },
    },
  ]);

  // Respond with the formatted data
  return NextResponse.json({
    labels: data.map((point) => {
      return convertDateStampToTimeFormat(point._id,timeformat);
    }),
    datasets: [
      {
        label: 'Conversion Rate',
        data: data.map((point) => parseFloat(point.conversionRate)),
        borderColor: '#9F7AEA',
        backgroundColor: 'rgba(159, 122, 234, 0.2)',
      },
    ],
  });
}
