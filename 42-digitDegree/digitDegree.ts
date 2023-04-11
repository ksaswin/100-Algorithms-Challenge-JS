export function digitDegree(n: number): number {
  let count = 0;

  while(n > 9) {
    count++;
    n = n.toString().split('').reduce((sum, intValue) => sum + parseInt(intValue) , 0);
  }

  return count;
}

