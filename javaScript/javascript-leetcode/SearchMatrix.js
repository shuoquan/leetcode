const searchMatrix = function(matrix, target) {
  for (let i = 0; i < matrix.length; i++) {
    if (target >= matrix[i][0] && target <= matrix[i][matrix[i].length - 1]) {
      let start = 0;
      let end = matrix[i].length - 1;
      let middle = parseInt((start + end) / 2);
      while (start <= end) {
        if (matrix[i][start] === target || matrix[i][end] === target) {
          return true;
        }
        if (target > matrix[i][middle]) {
          start = middle;
        } else if (target < matrix[i][middle]) {
          end = middle;
        } else {
          return true;
        }
        middle = parseInt((start + end) / 2);
        if (start === end - 1 || start === end) {
          break;
        }
      }
    }
  }
  return false;
};

// console.log(
//   searchMatrix(
//     [
//       [1, 3, 5, 7],
//       [10, 11, 16, 20],
//       [23, 30, 34, 50]
//     ],
//     13
//   )
// );

// console.log([1,2,3].toString()===[1,2,3].toString())
// console.log([1,2].join(','))
