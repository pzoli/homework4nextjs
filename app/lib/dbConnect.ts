import mongoose, { ConnectOptions, connect } from "mongoose";

export default async () => {
  try {
    if (!(mongoose.connections && mongoose.connections[0].readyState)) {
      await connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/quiz');
      console.log("connected to database.");
    }
  } catch (error) {
    console.log("could not connect to database", error);
  }
};
