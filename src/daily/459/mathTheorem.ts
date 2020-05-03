const isPerfectSquare = (input: number) => Math.sqrt(input) % 1 === 0;

export const fitsFormula = (input: number) => {
  for (let a = 0; Math.pow(4, a) * 7 <= input; a += 1) {
    const multiplier = input / Math.pow(4, a);
    if (multiplier % 1 !== 0) continue;
    const b = (multiplier - 7) / 8;
    if (b % 1 === 0) return true;
  }
  return false;
};

export const mathTheorem = (input: number): number => {
  // Any integer can be expressed with at most 4 perfect square
  // An integer is the sum of 3 perfect square iff it cannot be
  // expressed in the form of N = 4a* (8 * b + 7)

  // If number is perfect square, return 1
  if (isPerfectSquare(input)) return 1;

  // If number is sum of 2 perfect square, return 2
  for (let i = 1; i <= Math.floor(Math.sqrt(input)); i += 1) {
    const remainder = input - Math.pow(i, 2);
    if (isPerfectSquare(remainder)) return 2;
  }

  // If number cannot be expressed in above, return 3
  if (!fitsFormula(input)) return 3;

  // else return 4
  return 4;
};
