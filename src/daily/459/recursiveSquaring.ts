// Wrong answer
export const recursiveSquaring = (input: number): number => {
  const squared = Math.sqrt(input);
  const remainder = squared % 1;
  const perfectSquare = remainder === 0;
  if (perfectSquare) return 1;
  return 1 + recursiveSquaring(input - Math.pow(Math.floor(squared), 2));
};
