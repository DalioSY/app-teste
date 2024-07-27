import mongoose from "mongoose";
import * as dotenv from "dotenv";

export async function connectDatabase() {
  mongoose.set("strictQuery", true);

  const apiKey = dotenv.config().parsed.MONGODB_API_KEY;

  return await mongoose.connect(apiKey);
}
