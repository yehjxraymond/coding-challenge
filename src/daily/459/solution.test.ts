import { mathTheorem } from "./mathTheorem";
import { recursiveSquaring } from "./recursiveSquaring";
import { dynamicProgramming } from "./dynamicProgramming";

const inputs = [0, 4, 17, 18, 257, 1046, 1047];
const outputs = [1, 1, 2, 2, 2, 3, 4];

const testSolution = (fn: (input: number) => number) => {
  for (let i = 0; i < inputs.length; i += 1) {
    const answer = fn(inputs[i]);
    if (answer != outputs[i]) return false;
  }
  return true;
};

test("recursiveSquaring does not work correctly", () => {
  expect(testSolution(recursiveSquaring)).toBe(false);
});

test("mathTheorem should work correctly", () => {
  expect(testSolution(mathTheorem)).toBe(true);
});

test("dynamicProgramming, should work correctly", () => {
  expect(testSolution(dynamicProgramming)).toBe(true);
});
