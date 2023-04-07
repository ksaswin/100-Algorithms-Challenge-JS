export function containsCloseNums(nums: number[], target: number): boolean {
  const numsSet = new Set(nums)

  if (numsSet.size === nums.length) {
    return false; // Since there are no repeated values
  }

  let containsCloseNums = false;

  numsSet.forEach((setValue: number) => {
    const indices = [];

    nums.forEach((num: number, index: number) => {
      if (num === setValue) {
        indices.forEach((savedIndex) => {
          if (Math.abs(savedIndex - index) <= target) {
            containsCloseNums = true;
          }
        });

        indices.push(index);
      }

    });
  });

  return containsCloseNums;
}
