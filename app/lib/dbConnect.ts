import mongoose, { connect } from "mongoose";

let cached: undefined | Promise<void>;
export default () => {
  if (mongoose.connections && mongoose.connections[0].readyState)
    return Promise.resolve();

  if (!cached) {
    cached = connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/quiz')
      .then(() => console.log("connected to database."))
      .catch((err) => console.log("could not connect to database", err));
  }
  return cached;
}
