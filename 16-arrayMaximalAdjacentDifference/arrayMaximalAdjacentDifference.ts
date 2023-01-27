export function arrayMaximalAdjacentDifference(inputArray: number[]): number {
  let maximalDifference: number = Math.abs(inputArray[0] - inputArray[1]);

  for (let i=1; i<inputArray.length-1; i++) {
    maximalDifference = Math.max((Math.abs(inputArray[i] - inputArray[i+1])), maximalDifference);
  }

  return maximalDifference;
}

// export function arrayMaximalAdjacentDifference(inputArray: number[]): number {
//   let difference = Math.abs(inputArray[0] - inputArray[1]);
//   let maximalDifference: number = difference;
//
//   for (let i=1; i<inputArray.length-1; i++) {
//     difference = Math.abs(inputArray[i] - inputArray[i+1]);
//
//     if (difference > maximalDifference) {
//       maximalDifference = difference;
//     }
//   }
//
//   return maximalDifference;
// }

// console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));
