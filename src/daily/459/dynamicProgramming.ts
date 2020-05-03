const isPerfectSquare = (input: number) => Math.sqrt(input) % 1 === 0;

export const dynamicProgramming = (input: number) => {
  const solutions: number[] = [];

  for (let i = 0; i <= input; i += 1) {
    if (isPerfectSquare(i)) {
      solutions.push(1);
      continue;
    }
    // If it's not perfect square, search for better solution in the index before
    // This has an upper bound of 1 + solution[i-1]
    let bestSolution = 1 + solutions[i - 1];
    for (let j = 2; j < i; j += 1) {
      for (let k = j; k < i; k += 1) {
        if (j + k == i) {
          const newSolution = solutions[j] + solutions[k];
          if (newSolution < bestSolution) bestSolution = newSolution;
        }
      }
    }
    solutions.push(bestSolution);
  }
  return solutions[solutions.length - 1];
};
