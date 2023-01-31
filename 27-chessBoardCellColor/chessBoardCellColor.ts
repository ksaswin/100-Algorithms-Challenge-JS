export function chessBoardCellColor(cell1: string, cell2: string): boolean {
  const columnMarkers = { 'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5, 'F': 6, 'G': 7, 'H': 8 };

  const total1 = ( columnMarkers[cell1[0]] + parseInt(cell1[1]) ) % 2;
  const total2 = ( columnMarkers[cell2[0]] + parseInt(cell2[1]) ) % 2;

  return total1 === total2;
}

// Solution 1
// const findCellColor = (columnMarker, rowMarker) => {
//   const isColumnMarkerEven = (columnMarker % 2 === 0);
//   const isRowMarkerEven = (rowMarker % 2 === 0);
//
//   if (isColumnMarkerEven) {
//     if (isRowMarkerEven) {
//       return 'black';
//     }
//
//     return 'white';
//   }
//
//   if (isRowMarkerEven) {
//     return 'white';
//   }
//
//   return 'black';
// };
//
// export function chessBoardCellColor(cell1: string, cell2: string): boolean {
//   const columnMarkers = { 'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5, 'F': 6, 'G': 7, 'H': 8 };
//   const [ column1, row1 ] = [ columnMarkers[cell1[0]], parseInt(cell1[1]) ];
//   const [ column2, row2 ] = [ columnMarkers[cell2[0]], parseInt(cell2[1]) ];
//
//   return findCellColor(column1, row1) === findCellColor(column2, row2);
// }

// console.log(chessBoardCellColor('A1', 'C3'));
// console.log(chessBoardCellColor('A1', 'H3'));
