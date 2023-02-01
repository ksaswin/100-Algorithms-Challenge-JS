export function commonCharacterCount(s1: string, s2: string): number {
  s1 = s1.split('').sort().join('');
  s2 = s2.split('').sort().join('');

  const s1Set = new Set(s1);
  const s2Set = new Set(s2);

  const s1CharacterCount = {};
  const s2CharacterCount = {};

  let commonCharacters = 0;

  s1Set.forEach((character) => {
    s1CharacterCount[character] = s1.split(character).length - 1;
  });

  s2Set.forEach((character) => {
    s2CharacterCount[character] = s2.split(character).length - 1;

    if (s1.includes(character)) {
      commonCharacters += s1CharacterCount[character] > s2CharacterCount[character] ? s2CharacterCount[character] : s1CharacterCount[character];
    }
  });

  return commonCharacters;
}

// console.log(commonCharacterCount('aabcc', 'adcaa'));
