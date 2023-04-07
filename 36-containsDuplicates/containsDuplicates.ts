export function containsDuplicates(a: number[]): boolean {
  return !((new Set(a)).size === a.length);
}
