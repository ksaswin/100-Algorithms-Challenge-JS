export function addTwoDigits(n: any): number {
  const sum = n.toString().split('').reduce((total, currentValue) => {
    return total + parseInt(currentValue);
  }, 0);

  return sum;
}

// console.log(addTwoDigits(29));
