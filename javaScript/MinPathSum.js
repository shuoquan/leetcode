// leetcode 64 回溯dfs超时
// const minPathSum = function(grid) {
//   let min = Infinity;
//   min = trace(grid, 0, 0, [], grid.length, grid[0].length, min);
//   return min;
// };
//
// const trace = function(grid, row, column, path, m, n, min) {
//   const newPath = path.concat(grid[row][column]);
//   if (newPath.length === m + n - 1) {
//     const sum = newPath.reduce((last, cur) => last + cur, 0);
//     if (min === Infinity || sum < min) {
//       min = sum;
//     }
//   }
//   if (row + 1 < m) {
//     min = trace(grid, row + 1, column, newPath, m, n, min);
//   }
//   if (column + 1 < n) {
//     min = trace(grid, row, column + 1, newPath, m, n, min);
//   }
//   return min;
// };

const minPathSum = function(grid) {
  const dp = Array(grid.length);
  for (let i = 0; i < grid.length; i++) {
    dp[i] = Array(grid[0].length);
    for (let j = 0; j < grid[0].length; j++) {
      if (i === 0) {
        dp[i][j] = (dp[i][j - 1] || 0) + grid[i][j];
      } else {
        // dp[i][j] =
        //   j > 0
        //     ? Math.min(dp[i][j - 1] + grid[i][j], dp[i - 1][j] + grid[i][j])
        //     : dp[i - 1][j] + grid[i][j];
        dp[i][j] =
          (j > 0 ? Math.min(dp[i][j - 1], dp[i - 1][j]) : dp[i - 1][j]) +
          grid[i][j];
      }
    }
  }
  return dp[grid.length - 1][grid[0].length - 1];
};

console.log(
  minPathSum([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1]
  ])
);
