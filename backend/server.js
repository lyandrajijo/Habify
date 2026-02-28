import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import habitRoutes from "./routes/habits.js";

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/habits", habitRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));