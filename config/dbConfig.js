import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.mongo_url);
    console.log(`MongoDB connected successfuly`);
  } catch (error) {
    console.error(`Error connecting to mongoDB :${error.message}`);
    process.exit(1);
  }
};

export default connectMongoDB;
