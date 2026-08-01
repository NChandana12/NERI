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
    message: "NERI Backend Running 🚀",
  });
});

console.log("Loading scenario routes...");

app.use("/api/scenario", scenarioRoutes);

console.log("Scenario routes loaded.");

app._router.stack.forEach((r) => {
  if (r.route) {
    console.log(r.route.path, r.route.methods);
  } else if (r.name === "router") {
    console.log("Mounted router");
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});