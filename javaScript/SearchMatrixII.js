// leetcode 240
const searchMatrix = function(matrix, target) {
  let i = matrix.length - 1;
  let j = 0;
  const m = matrix.length;
  const n = matrix[0].length;
  while (i < m && i >= 0 && j >= 0 && j < n) {
    if (matrix[i][j] === target) {
      return true;
    } else if (matrix[i][j] > target) {
      i = -1;
    } else {
      j += 1;
    }
  }
  return false;
};
console.log(
  searchMatrix(
    [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30]
    ],
    5
  )
);
