import express from "express";
import authRoutes from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectMongoDB from "./db/connectMongoDB.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); //to parse request.body
app.use(express.urlencoded({ extended: true })); //to parse form data (urlencoded)
app.use(cookieParser());
app.use("/api/auth", authRoutes);

app.listen(PORT, (req, res) => {
  console.log(`Server Running at : ${PORT}`);
  connectMongoDB();
});
