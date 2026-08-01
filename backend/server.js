import "dotenv/config";
console.log(process.env.GEMINI_API_KEY);

import express from "express";
import cors from "cors";

import scenarioRoutes from "./routes/scenarioRoutes.js";

const app = express();

app.use(cors());
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