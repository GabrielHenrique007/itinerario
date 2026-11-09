import { describe, expect, it } from "vitest";
import { scoreQuiz } from "./quiz";

describe("scoreQuiz", () => {
  it("picks rap when rap answers dominate", () => {
    expect(scoreQuiz([1, 1, 1, 1, 1]).winner).toBe("rap");
  });
  it("picks forró when forró answers dominate", () => {
    expect(scoreQuiz([2, 2, 2, 2, 2]).winner).toBe("forro");
  });
  it("picks rock when rock answers dominate", () => {
    expect(scoreQuiz([0, 0, 0, 0, 0]).winner).toBe("rock");
  });
  it("sums scores across answers", () => {
    expect(scoreQuiz([3, 0, 0, 0, 0]).totals).toEqual({ rock: 9, rap: 1, forro: 1 });
  });
});
