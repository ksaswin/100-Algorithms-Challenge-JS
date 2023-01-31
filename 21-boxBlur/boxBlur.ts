export function boxBlur(image: number[][]): number[][] {
  let blur: Array<Array<number>> = [];
  const length = image.length;
  let sum = 0;
  let line: Array<number> = [];

  for (let i = 0; i < length - 2; i++) {
    line = [];

    for (let j = 0; j < length - 2; j++) {
      sum = 0;

      for (let a = i; a < i + 3; a++) {
        for (let b = j; b < j + 3; b++) {
          sum += image[a][b];
        }
      }

      line.push(Math.floor(sum / 9));
    }

    blur.push(line);
  }

  return blur
}

// console.log(boxBlur([[1, 1, 1], 
//     [1, 7, 1], 
//     [1, 1, 1]]));
