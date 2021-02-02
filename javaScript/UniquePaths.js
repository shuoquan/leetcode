// leetcode62
// 下列回溯方法超时
// const uniquePaths = function(m, n) {
//   let total = 0;
//   total = findPath(m, n, 0, 0, total);
//   return total;
// };

const findPath = function(m, n, row, column, total) {
  if (row + 1 === m && column + 1 === n) {
    total += 1;
    return total;
  }
  if (row + 1 < m) {
    total = findPath(m, n, row + 1, column, total);
  }
  if (column + 1 < n) {
    total = findPath(m, n, row, column + 1, total);
  }
  return total;
};

// 方法二使用动态规划
const uniquePaths = function(m, n) {
  const path = Array(m);
  for (let i = 0; i < m; i++) {
    path[i] = Array(n).fill(0);
    for (let j = 0; j < n; j++) {
      if (i === 0) {
        path[i][j] = 1;
      } else {
        path[i][j] =
          (i - 1 >= 0 ? path[i - 1][j] : 0) + (j - 1 >= 0 ? path[i][j - 1] : 0);
      }
    }
  }
  return path[m - 1][n - 1];
};

console.log(uniquePaths(23, 12));
