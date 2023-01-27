export function allLongestStrings(inputArray: string[]): string[] {
  let longestString = 0;

  inputArray.forEach((element) => {
    longestString = element.length > longestString ? element.length : longestString;
  });

  const newArray: string[] = inputArray.filter(element => {
    return element.length === longestString;
  });

  return newArray;
}

// export function allLongestStrings(inputArray: string[]): string[] {
//   let longestString = 0;
//
//   inputArray.forEach((element) => {
//     longestString = element.length > longestString ? element.length : longestString;
//   });
//
//   const newArray: string[] = [];
//   inputArray.forEach((element) => {
//     if (element.length === longestString) {
//       newArray.push(element);
//     }
//   });
//
//   return newArray;
// }

// console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));
