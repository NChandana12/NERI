import { generateScenarioBatch } from "../services/geminiService.js";
import { validateRuleIds } from "../services/rulesEngine.js";
export async function getScenario(req, res) {
  try {
    const { type, difficulty } = req.body;

    const scenarios = await generateScenarioBatch(type, difficulty);

for (const scenario of scenarios) {
  if (!validateRuleIds(type, scenario.ruleIds)) {
    throw new Error(
      `Invalid rule IDs returned by Gemini for ${type}.`
    );
  }
}

res.json(scenarios);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to generate scenarios.",
    });
  }
}