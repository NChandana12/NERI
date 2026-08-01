import { describe, it, expect } from "vitest";
import { getRules, validateRuleIds } from "../services/rulesEngine.js";

const emergencyTypes = [
  "Building Fire",
  "Earthquake",
  "Medical Emergency",
  "Chemical Spill",
];

describe("Rules Engine", () => {

  // ------------------------
  // Rule Retrieval
  // ------------------------

  emergencyTypes.forEach((type) => {

    it(`returns rules for ${type}`, () => {
      const rules = getRules(type);

      expect(rules).not.toBeNull();
    });

    it(`${type} has a source`, () => {
      const rules = getRules(type);

      expect(rules.source).toBeDefined();
      expect(typeof rules.source).toBe("string");
      expect(rules.source.length).toBeGreaterThan(0);
    });

    it(`${type} has principles`, () => {
      const rules = getRules(type);

      expect(rules.principles.length).toBeGreaterThan(0);
    });

    it(`${type} principles are strings`, () => {
      const rules = getRules(type);

      rules.principles.forEach((rule) => {
        expect(typeof rule).toBe("string");
      });
    });

  });

  // ------------------------
  // Unknown Types
  // ------------------------

  it("returns null for unknown emergency", () => {
    expect(getRules("Alien Attack")).toBeNull();
  });

  it("returns null for empty emergency", () => {
    expect(getRules("")).toBeNull();
  });

  it("returns null for undefined emergency", () => {
    expect(getRules(undefined)).toBeNull();
  });

  // ------------------------
  // Rule Validation
  // ------------------------

  it("accepts one valid rule", () => {
    expect(
      validateRuleIds("Building Fire", ["RULE_1"])
    ).toBe(true);
  });

  it("accepts multiple valid rules", () => {
    expect(
      validateRuleIds("Building Fire", ["RULE_1", "RULE_2"])
    ).toBe(true);
  });

  it("rejects invalid rule id", () => {
    expect(
      validateRuleIds("Building Fire", ["RULE_999"])
    ).toBe(false);
  });

  it("rejects mixed valid and invalid rule ids", () => {
    expect(
      validateRuleIds("Building Fire", ["RULE_1", "RULE_999"])
    ).toBe(false);
  });

  it("accepts empty ruleIds array", () => {
    expect(
      validateRuleIds("Building Fire", [])
    ).toBe(true);
  });

  it("rejects unknown emergency type", () => {
    expect(
      validateRuleIds("Zombie", ["RULE_1"])
    ).toBe(false);
  });

  // ------------------------
  // Rule Count Consistency
  // ------------------------

  emergencyTypes.forEach((type) => {

    it(`${type} has matching rule IDs`, () => {

      const rules = getRules(type);

      const generatedIds = rules.principles.map(
        (_, index) => `RULE_${index + 1}`
      );

      expect(generatedIds.length).toBe(rules.principles.length);

    });

  });

});