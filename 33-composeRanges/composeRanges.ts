export function composeRanges(nums: number[]): string[] {
  const numberRanges: Array<string> = [];
  let currentRange = 0;
  
  numberRanges.push(`${nums[0]}->`);

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] + 1 !== nums[i+1]) {
      numberRanges[currentRange] += `${nums[i]}`;

      numberRanges.push(`${nums[i+1]}`);
      currentRange++;

      if (i+2 !== nums.length) {
        numberRanges[currentRange] += '->';
      }
    } else if (i+2 === nums.length) {
      numberRanges[currentRange] += `${nums[i+1]}`;
    }
  }

  return numberRanges;
}

// console.log(composeRanges([-1, 0, 1, 2, 6, 7, 9]));
