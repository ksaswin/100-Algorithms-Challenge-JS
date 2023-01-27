export function areEquallyStrong(yourLeft: number, yourRight: number, friendsLeft: number, friendsRight: number): boolean {
  const [ yourSum, friendsSum ] = [ (yourLeft + yourRight), (friendsLeft + friendsRight) ];
  const [ yourStrength, friendStrength ] = [ Math.max(yourLeft, yourRight), Math.max(friendsLeft, friendsRight) ];

  const [yourWeakness, friendWeakness] = [ (yourSum - yourStrength), (friendsSum - friendStrength) ];

  return (friendStrength === yourStrength) && (friendWeakness === yourWeakness);
}

// export function areEquallyStrong(yourLeft: number, yourRight: number, friendsLeft: number, friendsRight: number): boolean {
//   const [yourStrength, yourWeakness] = yourRight > yourLeft ? [yourRight, yourLeft] : [yourLeft, yourRight];
//   const [friendStrength, friendWeakness] = friendsRight > friendsLeft ? [friendsRight, friendsLeft] : [friendsLeft, friendsRight];
//
//   return (friendStrength === yourStrength) && (friendWeakness === yourWeakness);
// }

// console.log(areEquallyStrong(10, 15, 15, 10))
// console.log(areEquallyStrong(15, 10, 15, 10))
// console.log(areEquallyStrong(15, 10, 15, 9))
