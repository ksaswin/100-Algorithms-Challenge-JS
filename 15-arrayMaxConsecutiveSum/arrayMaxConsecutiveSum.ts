export function arrayMaxConsecutiveSum(inputArray: number[], k: number): number {
  let largestSum: number = 0;
  let sum: number;

  for (let i=0; i<(inputArray.length - k); i++) {
    sum = 0;

    for (let j=i; j<i+k; j++) {
      sum += inputArray[j];
    }

    if (sum > largestSum) {
      largestSum = sum;
    }
  }

  return largestSum;
}

// console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));
