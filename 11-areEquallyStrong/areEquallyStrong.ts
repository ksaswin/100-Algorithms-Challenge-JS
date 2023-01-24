export function areEquallyStrong(yourLeft: number, yourRight: number, friendsLeft: number, friendsRight: number): boolean {
  const [yourStrength, yourWeakness] = yourRight > yourLeft ? [yourRight, yourLeft] : [yourLeft, yourRight];
  const [friendStrength, friendWeakness] = friendsRight > friendsLeft ? [friendsRight, friendsLeft] : [friendsLeft, friendsRight];

  return (friendStrength === yourStrength) && (friendWeakness === yourWeakness);
}

// console.log(areEquallyStrong(10, 15, 15, 10))
// console.log(areEquallyStrong(15, 10, 15, 10))
// console.log(areEquallyStrong(15, 10, 15, 9))
