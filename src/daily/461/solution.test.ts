const factorial = (num: number): number => {
  if (num < 0) return -1;
  else if (num == 0) return 1;
  else {
    return num * factorial(num - 1);
  }
};

const countTraversal = (n: number, m: number) => {
  // Given a start node and end node, the total number of right and down
  // actions will be the same, just in different permutations
  // Number of right = col = m
  // Number of down = row = n
  // Ie for a given 2x2 matrix, it will be 1 right and 1 down
  // Ie for a given 5x5 matrix, it will be 4 right and 4 down
  // So we are really just coming up with the number of permutations of similar objects
  return factorial(n + m - 2) / factorial(n - 1) / factorial(m - 1);
};

it("works", () => {
  expect(countTraversal(2, 2)).toBe(2);
  expect(countTraversal(5, 5)).toBe(70);
});
