import { channel } from "diagnostics_channel";
import mongoose, { Mongoose } from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL;

interface MongooseConnection {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

// to implement caching
let cached: MongooseConnection = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = {
    conn: null,
    promise: null,
  };
}

export const connectToDatabase = async () => {
  // if (cached.conn) return cached.conn;

  if (!MONGODB_URL) throw new Error("Missing MongoDB url");
  console.log("hi");
  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URL, {
      dbName: "Imaginify",
      bufferCommands: false,
    });

  cached.conn = await cached.promise;

  return cached.conn;
};
