export function alternatingSums(a: number[]): number[] {
  const sum = [0, 0];
  a.forEach((weight, index) => {
    if (index%2 === 0) {
      sum[0] += weight;
    }
    else {
      sum[1] += weight;
    }
  });

  return sum;
}

// console.log(alternatingSums([50, 60, 60, 45, 70]))
