// Second solution
export function confirmEnding(str: string, target: string) {
  return str.endsWith(target);
}

// First solution
// export function confirmEnding(str: string, target: string) {
//   const strLength = str.length;
//   const targetLength = target.length;
//
//   return str.substr(strLength - targetLength) === target;
// }
