export function differentSymbolsNaive(s: string): number {
  const uniqueChars = [];

  s.split('').forEach((char) => {
    if (!uniqueChars.includes(char)) {
      uniqueChars.push(char);
    }
  });

  return uniqueChars.length;
}

