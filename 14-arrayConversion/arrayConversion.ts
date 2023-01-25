export function arrayConversion(inputArray: number[]): number {
  let newArray: Array<number> = [];
  const iterations = Math.log(inputArray.length) / Math.log(2);

  for(let i=1; i<=iterations; i++) {
    for (let j=0; j<inputArray.length; j+=2) {
      if (i%2 === 0) {
        newArray.push(inputArray[j] * inputArray[j+1]);
      }
      else {
        newArray.push(inputArray[j] + inputArray[j+1]);
      }
    }
    inputArray = [...newArray];
    newArray = [];
  }

  return inputArray[0];
}

// Brute forcing
// export function arrayConversion(inputArray: number[]): number {
//   let newArray: Array<number> = [];
//   let iterations = 1;
//
//   while(inputArray.length > 1) {
//     for (let i=0; i<inputArray.length; i+=2) {
//       if (iterations%2 === 0) {
//         newArray.push(inputArray[i] * inputArray[i+1]);
//       }
//       else {
//         newArray.push(inputArray[i] + inputArray[i+1]);
//       }
//     }
//
//     inputArray = [...newArray];
//     newArray = [];
//
//     iterations++;
//   }
//
//   return inputArray[0];
// }

// console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));
