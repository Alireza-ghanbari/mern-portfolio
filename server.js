import express from "express";
import dotenv from "dotenv";
import connectMongoDB from "./config/dbConfig.js";
import portfolioRouter from "./routes/portfolio.route.js";
import userRouter from "./routes/user.route.js";
import path from "path";

dotenv.config();
const app = express();
const port = process.env.port || 5000;

app.use(express.json());

app.use("/api/portfolio", portfolioRouter);
app.use("/api/portfolio", userRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
  app.get("*", req, (res) => {
    res.sendFile(path.join(__dirname, "client/build/index.html"));
  });
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  connectMongoDB();
});
