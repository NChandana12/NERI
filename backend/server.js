import "dotenv/config";

import express from "express";
import cors from "cors";

import scenarioRoutes from "./routes/scenarioRoutes.js";

const app = express();

app.use(
  cors({
    origin: [
      "https://neri-ai.netlify.app",
      "http://localhost:5173",
    ],
    methods: ["GET", "POST"],
    credentials: false,
  })
);
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "Neri Backend Running 🚀",
    });
});

app.use("/api/scenario", scenarioRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});