function getCharList(chars: Array<string>): object {
  const wordCount = {};

  chars.forEach((character) => {
    if (wordCount.hasOwnProperty(character)) {
      wordCount[character]++;
    } else {
      wordCount[character] = 1;
    }
  });

  return wordCount;
}

export function commonCharacterCount(s1: string, s2: string): number {
  const s1Chars = s1.split('');
  const s2Chars = s2.split('');

  const s1CharCount = getCharList(s1Chars);
  const s2CharCount = getCharList(s2Chars);

  let total = 0;

  for (const prop in s1CharCount) {
    if (s2CharCount.hasOwnProperty(prop)) {
      total += s2CharCount[prop] < s1CharCount[prop] ? s2CharCount[prop] : s1CharCount[prop];
    }
  }

  return total;
}

// export function commonCharacterCount(s1: string, s2: string): number {
//   s1 = s1.split('').sort().join('');
//   s2 = s2.split('').sort().join('');
//
//   const s1Set = new Set(s1);
//   const s2Set = new Set(s2);
//
//   const s1CharacterCount = {};
//   const s2CharacterCount = {};
//
//   let commonCharacters = 0;
//
//   s1Set.forEach((character) => {
//     s1CharacterCount[character] = s1.split(character).length - 1;
//   });
//
//   s2Set.forEach((character) => {
//     s2CharacterCount[character] = s2.split(character).length - 1;
//
//     if (s1.includes(character)) {
//       commonCharacters += s1CharacterCount[character] > s2CharacterCount[character] ? s2CharacterCount[character] : s1CharacterCount[character];
//     }
//   });
//
//   return commonCharacters;
// }

// console.log(commonCharacterCount('aabcc', 'adcaa'));
