export function compareIntegers(a: string, b: string): string {
  a = parseInt(a);
  b = parseInt(b);

  return a === b ? 'equal' : (a < b ? 'less' : 'greater');
}

// console.log(compareIntegers('12', '13'));
// console.log(compareIntegers('875', '799'));
// console.log(compareIntegers('1000', '1000'));
