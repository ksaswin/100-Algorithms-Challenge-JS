// This solution is from
// https://www.geeksforgeeks.org/minimum-length-of-jumps-to-avoid-given-array-of-obstacles/
export function avoidObstacles(inputArray: number[]): number {
  const obstacleSet = new Set(inputArray);
  const max = Math.max(...inputArray);

  // checking for every possible length which
  // yield us solution
  for (let i = 1; i <= max; i++) {
    let j: number;
    for (j = i; j <= max; j = j + i) {
      // if there is obstacle, break the loop.
      if (obstacleSet.has(j)) {
        break;
      }
    }

    // If above loop did not break
    if (j > max) {
      return i;
    }
  }

  return max + 1;
}

// export function avoidObstacles(inputArray: number[]): number {
//   inputArray.sort((a, b) => a-b);
//   const largestArrayValue = inputArray[inputArray.length - 1];
//
//   for (let i=1; i<largestArrayValue; i++) {
//     if (inputArray.every((element) => element % i !== 0)) {
//       return i;
//     }
//   }
//
//   return largestArrayValue + 1;
// }

// console.log(avoidObstacles([5, 3, 6, 7, 9]));
