import { GoogleGenAI } from "@google/genai";
import { getRules } from "./rulesEngine.js";

export async function generateScenarioBatch(type, difficulty) {
  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
  });

  try {
const emergencyRules = getRules(type);


if (!emergencyRules) {
  throw new Error(`No emergency rules found for type: ${type}`);
}
let allowedActions = "";
let phaseInstructions = "";

if (emergencyRules.phases) {
  phaseInstructions = `
This emergency has phases.

Allowed phases:

- DURING_SHAKING
- AFTER_SHAKING

Include a "phase" field in every scenario.

Example:

"phase": "DURING_SHAKING"
`;

  allowedActions = Object.keys(
    emergencyRules.phases.DURING_SHAKING.actions
  ).join("\n");
} else {
  allowedActions = Object.keys(emergencyRules.actions).join("\n");
}

    const prompt = `
You are an emergency response trainer.

Generate FIVE unique emergency response scenarios.

Return ONLY valid JSON.

Return an ARRAY of 5 objects.

Example:

[
  {
  "scenario": "...",
   "phase": "DURING_SHAKING",
  "options": [
  {
  "text": "Evacuate immediately.",
  "action": "EVACUATE"
},
{
  "text": "Use the elevator.",
  "action": "USE_ELEVATOR"
},
{
  "text": "Call emergency services.",
  "action": "CALL_911"
},
{
  "text": "Wait for instructions.",
  "action": "WAIT"
}
],
  "ruleIds": ["RULE_1", "RULE_4"],
  "feedback":[
  "...",
  "...",
  "...",
  "..."
],
  "explanation": "...",
  "source": "NFPA & FEMA",
  "risk": "High"
  }
]
  Write concise, realistic emergency scenarios.

Rules:
- Scenario: 40-60 words.
- Options: One sentence each.
- Explanation: 30-40 words.
- Make distractors believable.
- Avoid obvious wrong answers.
- Focus on practical decision making.

Emergency Response Principles

Source:
${emergencyRules.source}

Generate four realistic action options.

Exactly ONE option should represent the highest-priority response according to the emergency response principles below.
Randomize the order of the four options. Do not place the highest-priority option in the same position every time.
The remaining options should be plausible but lower-priority or unsafe responses.

Do not decide or label which option is correct.
The application will determine the highest-priority option using its own rules engine.
${emergencyRules.principles
    .map((rule, i) => `${i + 1}. ${rule}`)
    .join("\n")}

Every principle above is an application rule.

Assign each principle a rule ID:

RULE_1
RULE_2
RULE_3
...

The "ruleIds" field should contain the IDs of the emergency-response principles represented by the highest-priority action.
Example:

"ruleIds": ["RULE_2", "RULE_5"]
Each option must include:

text: the response shown to the user.

action: use ONLY ONE of the allowed action codes below.

Allowed action codes for this emergency:

${allowedActions}

Use ONLY these action codes.

Do NOT invent new action names.

Each option must use a different action code.

The "source" field must contain the organization(s) that justify the emergency response guidance (for example: "NFPA", "NFPA & FEMA", "American Red Cross", or "OSHA").
Requirements:

- Generate 5 DIFFERENT scenarios.
- Emergency Type: ${type}
- Difficulty: ${difficulty}
- Every scenario must be unique.
- Keep each scenario between 40-70 words.
- Exactly 4 believable options.
- Include:
    - scenario
    - options
    - phase (only for emergencies that use phases)
    - ruleIds
    - feedback
    - explanation
    - source
    - risk
    The "feedback" field must contain exactly 4 strings.

feedback[0] explains option 0.

feedback[1] explains option 1.

feedback[2] explains option 2.

feedback[3] explains option 3.

Each feedback message should explain WHY that specific option is correct or incorrect.
Do NOT include a "correct" field.

Generate realistic action codes only.

The application will determine the correct option using its own rules engine.
Do not write one generic wrong answer.
${phaseInstructions}

- Return JSON only.
- Do NOT wrap in markdown.
`;

    const response = await ai.models.generateContent({
      model: "gemini-flash-latest",
      contents: prompt,
    });

    const text = response.text.trim();

    console.log("Gemini Response:");
    console.log(text);

    return JSON.parse(text);

  } catch (error) {
    console.error("Gemini Error:", error);
    throw error;
  }
}