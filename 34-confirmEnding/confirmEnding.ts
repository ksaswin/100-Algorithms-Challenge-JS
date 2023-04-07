export function confirmEnding(str: string, target: string) {
  const strLength = str.length;
  const targetLength = target.length;

  return str.substr(strLength - targetLength) === target;
}
