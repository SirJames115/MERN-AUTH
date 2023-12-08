import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";

const port = process.env.PORT || 5000;
import userRoutes from "./routes/userRoutes.js";

// Will uncomment the DB connection line when I need it, because am not always connected o the internet
// connectDB();

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.status(200).send("Server is ready");
});

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running and listening for api calls on port: ${port}`);
});