import { RULES } from "../data/rules.js";

export function getRules(type) {
  return RULES[type] || null;
}

export function validateRuleIds(type, ruleIds = []) {
  const rules = getRules(type);

  if (!rules) return false;

  const validRuleIds = rules.principles.map((_, index) => `RULE_${index + 1}`);

  return ruleIds.every((id) => validRuleIds.includes(id));
}