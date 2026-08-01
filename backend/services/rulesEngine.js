import { RULES } from "../data/rules.js";

export function getRules(type) {
  return RULES[type] || null;
}

export function validateRuleIds(type, ruleIds = []) {
  const rules = getRules(type);

  if (!rules) return false;

  const validRuleIds = rules.principles.map(
    (_, index) => `RULE_${index + 1}`
  );

  return ruleIds.every((id) => validRuleIds.includes(id));
}

export function determineCorrectOption(
  type,
  phase = null,
  options = []
) {
  const rules = getRules(type);

  if (!rules) {
    throw new Error(`No emergency rules found for ${type}`);
  }

  // Use phase-specific actions if available (Earthquake)
  const actions =
    rules.phases && phase
      ? rules.phases[phase]?.actions
      : rules.actions;

  if (!actions) {
    throw new Error(
      `No actions found for ${type}${phase ? ` (${phase})` : ""}`
    );
  }

  let bestIndex = -1;
  let highestPriority = -1;
  let matchedRuleIds = [];

  options.forEach((option, index) => {
    const action = actions[option.action];

    if (!action) return;

    if (action.priority > highestPriority) {
      highestPriority = action.priority;
      bestIndex = index;
      matchedRuleIds = action.rules.map(
        (rule) => `RULE_${rule}`
      );
    }
  });

  if (bestIndex === -1) {
    throw new Error("Unable to determine correct option.");
  }

  return {
    correct: bestIndex,
    ruleIds: matchedRuleIds,
  };
}