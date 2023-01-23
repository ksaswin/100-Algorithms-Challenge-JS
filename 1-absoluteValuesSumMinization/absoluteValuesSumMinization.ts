export function absoluteValuesSumMinimization(a: number[]): number {
  const isEven = a.length % 2 === 0;
  const middleIndex = a.length / 2;

  return isEven ? a[middleIndex - 1] : a[Math.floor(middleIndex)];
}

// BRUTE FORCE METHOD
// export function absoluteValuesSumMinimization(a: number[]): number {
//   let min_sum: number | null = null;
//   let value = a[0];
//   let sum = 0;
//
//   for (let i=0; i<a.length; i++) {
//     sum = 0;
//
//     for (let j=0; j<a.length; j++) {
//       sum += Math.abs(a[j] - a[i]);
//     }
//
//     if (min_sum === null) {
//       min_sum = sum;
//       value = a[i];
//       continue;
//     }
//     
//     if (sum < min_sum) {
//       min_sum = sum;
//       value = a[i];
//     }
//   }
//
//   return value;
// }

// console.log(absoluteValuesSumMinimization([2, 4, 7]));
// console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
// console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
// console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));
