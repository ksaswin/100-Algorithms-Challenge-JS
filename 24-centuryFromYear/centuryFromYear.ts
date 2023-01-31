export function centuryFromYear(year: number): number {
  const century = Math.floor(year / 100);

  if (year % 100 === 0) {
    return century;
  }

  return century + 1;
}

// console.log(centuryFromYear(1905));
// console.log(centuryFromYear(1700));
