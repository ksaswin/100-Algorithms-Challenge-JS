export function isCaseInsensitivePalindrome(inputString: string): boolean {
  inputString = inputString.toLowerCase();
  const reversedString = inputString.split('').reverse().join('');

  return reversedString === inputString;
}

// console.log(isCaseInsensitivePalindrome('AaBaa'));
// console.log(isCaseInsensitivePalindrome('abac'));
