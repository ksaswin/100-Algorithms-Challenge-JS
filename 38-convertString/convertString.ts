// // Another solution
export function convertString(s: string, t: string): boolean {
  let word = '';
  let tIndex = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === t[tIndex]){
      word = word.concat(s[i]);
      tIndex++;

      if (word === t) {
        return true;
      }
    }
  }

  return false;
}


// Second Solution
// export function convertString(s: string, t: string): boolean {
//   let index = 0;
//
//   if (t.length > s.length) {
//     return false;
//   }
//
//   for (let i = 0; i < t.length; i++) {
//     const indexInS = s.substr(index).indexOf(t[i]);
//
//     if (indexInS === -1) {
//       return false;
//     } else {
//       index += indexInS + 1;
//     }
//   }
//
//   return true;
// }


// First Solition
// export function convertString(s: string, t: string): boolean {
//   let index = 0;
//   let canConvert = true;
//
//   t.split('').forEach((tChar) => {
//     const indexInS = s.substr(index).indexOf(tChar);
//     if (indexInS === -1) {
//       canConvert = false;
//     } else {
//       index += (indexInS + 1);
//     }
//   });
//
//   return canConvert;
// }
