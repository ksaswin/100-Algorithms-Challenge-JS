export function bishopAndPawn(bishop: string, pawn: string): boolean {
  const columnMarkers = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8 };

  const bishopPosition = [ columnMarkers[bishop[0]], parseInt(bishop[1]) ];
  const pawnPosition = [ columnMarkers[pawn[0]], parseInt(pawn[1]) ];

  if (bishopPosition[0] === pawnPosition[0] || bishopPosition[1] === pawnPosition[1]) {
    return false;
  }

  const difference = [ (Math.abs(bishopPosition[0] - pawnPosition[0])), (Math.abs(bishopPosition[1] - pawnPosition[1])) ];

  if (difference[0] === difference[1]) {
    return true;
  }

  return false;
}

// console.log(bishopAndPawn('a1', 'c3'));
