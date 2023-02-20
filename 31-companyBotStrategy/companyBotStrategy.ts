export function companyBotStrategy(trainingData: number[][]): number {
  let count = 0;

  const sum = trainingData.reduce((total, currentValue) => {
    if (currentValue[1] === 1) {
      count++;

      return total += currentValue[0];
    }

    return total;
  }, 0);

  return sum / count || 0;
}

// console.log(companyBotStrategy([[3, 1], [6, 1], [4, 1], [5, 1]]));
// console.log(companyBotStrategy([[4, 1], [4, -1], [0, 0], [6, 1]]));
// console.log(companyBotStrategy( [[4, -1], [0, 0], [5, -1]]));
