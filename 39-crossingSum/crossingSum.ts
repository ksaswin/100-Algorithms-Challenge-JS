export function crossingSum(matrix: number[][], a: number, b: number): number {
  let total = matrix[a].reduce((sum: number, currentValue: number) => {
    return sum + currentValue;
  }, 0);

  for (let i = 0; i < matrix.length; i++) {
    total += i === a ?0 : matrix[i][b];
  }

  return total;
}

