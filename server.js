import express from "express";
import dotenv from "dotenv";
import connectMongoDB from "./config/dbConfig.js";

dotenv.config();
const app = express();
const port = process.env.port || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  connectMongoDB();
});
