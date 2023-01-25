export function arrayPreviousLess(items: number[]): number[] {
  const newArray: Array<number> = [...items];
  newArray[0] = -1;
  let hasChanged: boolean = false;

  for (let i=1; i<items.length; i++) {
    hasChanged = false;

    for (let j=i-1; j>=0; j--) {
      if (items[j] < items[i]) {
        newArray[i] = items[j];
        hasChanged = true;

        break;
      }
    }

    if (!hasChanged) {
      newArray[i] = -1;
    }
  }

  return newArray;
}

// console.log(arrayPreviousLess([3, 5, 2, 4, 5]));
