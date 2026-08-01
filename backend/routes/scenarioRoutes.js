import express from "express";
import { getScenario } from "../controllers/scenarioController.js";

const router = express.Router();

router.post("/", getScenario);

export default router;