export function characterParity(symbol: string): string {
  const parsed = parseInt(symbol);

  if (isNaN(parsed)) {
    return 'not a digit'
  }

  return parsed % 2 === 0 ? 'even' : 'odd';
}

// console.log(characterParity('5'))
// console.log(characterParity('8'))
// console.log(characterParity('q'))
