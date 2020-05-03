// There exist an index i which all the the preceding characters are x's and all characters on or after are y's
// Time complexity = O(2n)

const middlePoint = (input: string) => {
  // First pass to count the number of x
  const { length } = input;
  const totalNumberOfX = (input.match(/x/g) || []).length;

  // Second pass to iterate for the best result
  // For worst solution, flip everything to y at index 0
  let bestIndexAsMiddlePoint = 0;
  let bestNumberOfFlips = length;
  let sumOfXUpToI = 0;

  for (let i = 0; i <= length; i += 1) {
    const numYBeforeI = i - sumOfXUpToI;
    const numXOnOrAfterI = totalNumberOfX - sumOfXUpToI;
    const totalFlips = numYBeforeI + numXOnOrAfterI;
    if (totalFlips < bestNumberOfFlips) {
      bestNumberOfFlips = totalFlips;
      bestIndexAsMiddlePoint = i;
    }
    const currentCharacter = input[i];
    if (currentCharacter === "x") sumOfXUpToI += 1;
  }
  return bestNumberOfFlips;
};

test("middlePoint should solve the problem", () => {
  expect(middlePoint("xyxxxyxyy")).toBe(2);
});
