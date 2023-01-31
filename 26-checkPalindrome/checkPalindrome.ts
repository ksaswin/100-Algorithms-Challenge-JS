export function checkPalindrome(inputString: string): boolean {
  return inputString === inputString.split('').reverse().join('');
}

// console.log(checkPalindrome('aabaa'));
// console.log(checkPalindrome('abac'));
// console.log(checkPalindrome('a'));
