// Second solution
export function differentSymbolsNaive(s: string): number {
  return (new Set(s)).size;
}

// First solution
// export function differentSymbolsNaive(s: string): number {
//   const uniqueChars = [];
//
//   s.split('').forEach((char) => {
//     if (!uniqueChars.includes(char)) {
//       uniqueChars.push(char);
//     }
//   });
//
//   return uniqueChars.length;
// }
//
