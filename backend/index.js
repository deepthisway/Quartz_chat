import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoute from "./routes/user.route.js";
import messageRouter from "./routes/message.route.js"
import cors from "cors";
import cookieParser from "cookie-parser";
dotenv.config();

const app = express();
const PORT = 5003;
const URI = process.env.MONGODB_URI;

app.use(express.json());
const corsOptions = {
  origin: "http://localhost:4001", // Your frontend URL
  credentials: true,              // Allow cookies and credentials
};

app.use(cors(corsOptions));
app.use(cookieParser());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:4001");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// Connect to MongoDB
try {
  mongoose
    .connect(URI)
    .then(() => console.log("DB connected!!"))
    .catch((error) => console.error("DB connection error: ", error));
} catch (error) {
  console.error("Error while connecting to DB: ", error);
}

app.use("/user", userRoute);
app.use("/", messageRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
