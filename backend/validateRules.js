import "dotenv/config";
import { generateScenarioBatch } from "./services/geminiService.js";
import { determineCorrectOption } from "./services/rulesEngine.js";

async function validate() {
  const emergencyTypes = [
    "Building Fire",
    "Earthquake",
    "Medical Emergency",
    "Chemical Spill",
  ];

  let total = 0;
  let passed = 0;

  for (const type of emergencyTypes) {
    console.log(`\n=== ${type} ===`);

    const scenarios = await generateScenarioBatch(type, "Medium");

    for (const scenario of scenarios) {
      total++;

      try {
        const result = determineCorrectOption(
          type,
          scenario.phase || null,
          scenario.options
        );

        console.log(`✔ Scenario ${total}`);
        console.log(`Phase: ${scenario.phase || "N/A"}`);
        console.log(
          `Chosen Action: ${scenario.options[result.correct].action}`
        );

        passed++;
      } catch (err) {
        console.log(`✘ Scenario ${total}`);
        console.error(err.message);
      }
    }
  }

  console.log("\n====================");
  console.log(`Total: ${total}`);
  console.log(`Passed: ${passed}`);
  console.log(`Failed: ${total - passed}`);
}

validate();