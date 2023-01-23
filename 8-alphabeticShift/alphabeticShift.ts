export function alphabeticShift(inputString: string): string {
  let newString = inputString.split('').map((element) => {
    if (element === 'z') {
      return 'a';
    }

    return String.fromCharCode(element.charCodeAt(0) + 1);
  });

  return newString.join('');
}

// console.log(alphabeticShift('crazy'));
