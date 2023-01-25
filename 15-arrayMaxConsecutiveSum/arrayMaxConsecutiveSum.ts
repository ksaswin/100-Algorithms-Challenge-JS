// export function arrayMaxConsecutiveSum(inputArray: number[], k: number): number {
//   let largestSum: number = 0;
//   let sum: number;
//
//   for (let i=0; i<(inputArray.length - k); i++) {
//     sum = 0;
//
//     for (let j=i; j<i+k; j++) {
//       sum += inputArray[j];
//     }
//
//     if (sum > largestSum) {
//       largestSum = sum;
//     }
//   }
//
//   return largestSum;
// }

// METHOD 2
export function arrayMaxConsecutiveSum(inputArray: number[], k: number): number {
  let largestSum: number = 0;
  let sum: number = 0;

  for (let i=0; i<k; i++) {
    sum += inputArray[i];
  }

  largestSum = sum;

  for (let i=k; i<inputArray.length; i++) {
    sum -= inputArray[i-k];
    sum += inputArray[i];

    if (sum > largestSum) {
      largestSum = sum;
    }
  }

  return largestSum;
}

// console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));
