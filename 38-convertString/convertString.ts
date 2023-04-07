export function convertString(s: string, t: string): boolean {
  let index = 0;
  let canConvert = true;

  t.split('').forEach((tChar) => {
    const indexInS = s.substr(index).indexOf(tChar);
    if (indexInS === -1) {
      canConvert = false;
    } else {
      index += (indexInS + 1);
    }
  });

  return canConvert;
}
