export function areSimilar(a: number[], b: number[]): boolean {
  if (a.toString() === b.toString()) {
    return true;
  }

  const arrayC: Array<number> = [];
  const arrayD: Array<number> = [];

  for (let i=0; i<a.length; i++) {
    if (a[i] !== b[i]) {
      arrayC.push(a[i]);
      arrayD.push(b[i]);
    }
  }

  if (arrayC.length > 2) {
    return false;
  }

  if (arrayC.toString() === arrayD.reverse().toString()) {
    return true;
  }

  return false;
}

// console.log(areSimilar([1, 2, 3], [1, 2, 3]));
// console.log(areSimilar([1, 2, 3], [2, 1, 3]));
// console.log(areSimilar([1, 2, 2], [2, 1, 1]));
