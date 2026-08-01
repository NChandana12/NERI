import { generateScenarioBatch } from "../services/geminiService.js";
import {
  validateRuleIds,
  determineCorrectOption,
} from "../services/rulesEngine.js";

export async function getScenario(req, res) {
  try {
    const { type, difficulty } = req.body;

    const scenarios = await generateScenarioBatch(type, difficulty);

    for (const scenario of scenarios) {
      // Validate Gemini's cited rules
      if (!validateRuleIds(type, scenario.ruleIds)) {
        throw new Error(
          `Invalid rule IDs returned by Gemini for ${type}.`
        );
      }

      // Let the rules engine decide the correct answer
      const result = determineCorrectOption(
        type,
        scenario.options
      );
      console.log("Options:", scenario.options);
console.log("Rules Engine Decision:", result.correct);

      scenario.correct = result.correct;
      scenario.ruleIds = result.ruleIds;
    }

    res.json(scenarios);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to generate scenarios.",
    });
  }
}