export function checkPalindrome(inputString: string): boolean {
  const length = inputString.length;

  for (let i = 0; i < length / 2; i++) {
    if (inputString[i] !== inputString[length - i - 1]) {
      return false;
    }
  }

  return true;
}

// Solving the problem with methods available in JS
// export function checkPalindrome(inputString: string): boolean {
//   return inputString === inputString.split('').reverse().join('');
// }

// console.log(checkPalindrome('aabaa'));
// console.log(checkPalindrome('abac'));
// console.log(checkPalindrome('a'));
