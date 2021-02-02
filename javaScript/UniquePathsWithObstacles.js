const uniquePathsWithObstacles = function(obstacleGrid) {
  let m = obstacleGrid.length;
  let n = obstacleGrid[0].length;
  if (obstacleGrid[0][0] || obstacleGrid[m - 1][n - 1]) {
    return 0;
  }
  const path = Array(m);
  for (let i = 0; i < m; i++) {
    path[i] = Array(n);
    for (let j = 0; j < n; j++) {
      if (i === 0) {
        path[i][j] = obstacleGrid[i][j]
          ? 0
          : j === 0
          ? 1
          : path[i][j - 1]
          ? 1
          : 0;
      } else {
        path[i][j] = obstacleGrid[i][j]
          ? 0
          : path[i - 1][j] + (path[i][j - 1] || 0);
      }
    }
  }
  return path[m - 1][n - 1];
};

console.log(
  uniquePathsWithObstacles([
    [0, 1, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
  ])
);
