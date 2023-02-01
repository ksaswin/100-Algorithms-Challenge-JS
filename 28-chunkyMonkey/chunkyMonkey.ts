export function chunkyMonkey(arr: any[], size: number): any[][] {
  const chunkyMonkey: Array<Array<any>> = [];

  for (let i = 0; i < arr.length; i+=size) {
    chunkyMonkey.push(arr.slice(i, i+size));
  }

  return chunkyMonkey;
}

// console.log(chunkyMonkey(["a", "b", "c", "d"], 2));
// console.log(chunkyMonkey([0, 1, 2, 3, 4, 5], 4));
