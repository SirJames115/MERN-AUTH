import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";
import cors from "cors";

const port = process.env.PORT || 5000;
import userRoutes from "./routes/userRoutes.js";

// Will uncomment the DB connection line when I need it, because am not always connected o the internet
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use(cookieParser());

app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.status(200).send("Server is ready");
});

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running and listening for api calls on port: ${port}`);
});
