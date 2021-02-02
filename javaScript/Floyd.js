// 图数据结构中的弗洛伊德算法，解决节点最短路径
const matrix = [
  [0, 2, 6, 4],
  [Infinity, 0, 3, Infinity],
  [7, Infinity, 0, 1],
  [5, Infinity, 12, 0]
];

// 错误解法，外层对应每次经过的节点
// for (let i = 0; i < matrix.length; i++) {
//   for (let j = 0; j < matrix.length; j++) {
//     for (let k = 0; k < matrix.length; k++) {
//         if(matrix[i][k]!=Infinity&&matrix[k][j]!=Infinity&&matrix[i][k]+matrix[k][j]<matrix[i][j]){
//             matrix[i][j] = matrix[i][k]+matrix[k][j];
//         }
//     }
//   }
// }
//[ [ 0, 2, 5, 4 ], [ 10, 0, 3, 4 ], [ 6, 8, 0, 1 ], [ 5, 7, 10, 0 ] ]
for (let k = 0; k < matrix.length; k++) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (
        matrix[i][k] != Infinity &&
        matrix[k][j] != Infinity &&
        matrix[i][k] + matrix[k][j] < matrix[i][j]
      ) {
        matrix[i][j] = matrix[i][k] + matrix[k][j];
      }
    }
  }
}
console.log(matrix);
