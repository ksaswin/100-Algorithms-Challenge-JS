// Second solution
export function containsDuplicates(a: number[]): boolean {
  a.sort((val1, val2) => val1-val2);

  for (let i = 0; i < a.length; i++) {
    if (a[i] === a[i + 1]) {
      return true;
    }
  }

  return false;
}

// First solution
// export function containsDuplicates(a: number[]): boolean {
//   return !((new Set(a)).size === a.length);
// }
