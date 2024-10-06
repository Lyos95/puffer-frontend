import mongoose from 'mongoose';

export async function connectToDatabase() {
  if (mongoose.connection.readyState >= 1) return;

  if (!process.env.MONGO_URI) {
    throw new Error('MONGO_URI is not defined');
  }

  return mongoose.connect(process.env.MONGO_URI, {});
}
