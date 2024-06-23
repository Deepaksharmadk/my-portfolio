import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const dbinstance = await mongoose.connect(process.env.MONGO_URI);
    console.log(`connected to ${dbinstance.connection.host}`);
  } catch (error) {
    console.log("mongodb connection failed", error);
  }
};
export default connectDB;
