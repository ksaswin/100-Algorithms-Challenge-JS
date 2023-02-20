export function composeRanges(nums: number[]): string[] {
  if (nums.length < 1) {
    return [];
  }

  const ranges: any[] = [{ start: nums[0], end: nums[0] }];

  for (let i = 1; i < nums.length; i++) {
    if (ranges[ranges.length - 1].end + 1 === nums[i]) {
      ranges[ranges.length - 1].end = nums[i];
    } else {
      ranges.push({ start: nums[i], end: nums[i] });
    }
  }

  const numberRanges: string[] = [];

  for (let i = 0; i < ranges.length; i++) {
    if (ranges[i].start !== ranges[i].end) {
      numberRanges.push(`${ranges[i].start}->${ranges[i].end}`)
    } else {
      numberRanges.push(`${ranges[i].start}`);
    }
  }

  return numberRanges;
}

// Second solution
// The one without the currentRange variable
//
// export function composeRanges(nums: number[]): string[] {
//   const numberRanges: Array<string> = [];
//   
//   numberRanges.push(`${nums[0]}->`);
//
//   for (let i = 0; i < nums.length - 1; i++) {
//     if (nums[i] + 1 !== nums[i+1]) {
//       numberRanges[numberRanges.length - 1] += `${nums[i]}`;
//
//       numberRanges.push(`${nums[i+1]}`);
//
//       if (i+2 !== nums.length) {
//         numberRanges[numberRanges.length - 1] += '->';
//       }
//     } else if (i+2 === nums.length) {
//       numberRanges[numberRanges.length - 1] += `${nums[i+1]}`;
//     }
//   }
//
//   return numberRanges;
// }

// First solution
//
// export function composeRanges(nums: number[]): string[] {
//   const numberRanges: Array<string> = [];
//   let currentRange = 0;
//   
//   numberRanges.push(`${nums[0]}->`);
//
//   for (let i = 0; i < nums.length - 1; i++) {
//     if (nums[i] + 1 !== nums[i+1]) {
//       numberRanges[currentRange] += `${nums[i]}`;
//
//       numberRanges.push(`${nums[i+1]}`);
//       currentRange++;
//
//       if (i+2 !== nums.length) {
//         numberRanges[currentRange] += '->';
//       }
//     } else if (i+2 === nums.length) {
//       numberRanges[currentRange] += `${nums[i+1]}`;
//     }
//   }
//
//   return numberRanges;
// }

// console.log(composeRanges([-1, 0, 1, 2, 6, 7, 9]));
