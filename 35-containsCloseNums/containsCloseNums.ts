// Second solution
export function containsCloseNums(nums: number[], target: number): boolean {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        if (nums[i] === nums[j]) {
          if (Math.abs(i - j) <= target) {
            return true;
          }
        }
      }
    }
  }

  return false;
}



// First Solution
// export function containsCloseNums(nums: number[], target: number): boolean {
//   const numsSet = new Set(nums)
//
//   if (numsSet.size === nums.length) {
//     return false; // Since there are no repeated values
//   }
//
//   let containsCloseNums = false;
//
//   numsSet.forEach((setValue: number) => {
//     const indices = [];
//
//     nums.forEach((num: number, index: number) => {
//       if (num === setValue) {
//         indices.forEach((savedIndex) => {
//           if (Math.abs(savedIndex - index) <= target) {
//             containsCloseNums = true;
//           }
//         });
//
//         indices.push(index);
//       }
//
//     });
//   });
//
//   return containsCloseNums;
// }
