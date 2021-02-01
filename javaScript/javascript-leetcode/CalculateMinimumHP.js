// 倒序dp
const calculateMinimumHP = function(dungeon) {
  const dp = Array(dungeon.length);
  for (let i = dungeon.length - 1; i >= 0; i--) {
    dp[i] = Array(dungeon[i].length);
    for (let j = dungeon[i].length - 1; j >= 0; j--) {
      if (i === dungeon.length - 1) {
        dp[i][j] = (dp[i][j + 1] || 0) - dungeon[i][j];
        if (dp[i][j] < 0) {
          dp[i][j] = 0;
        }
      } else {
        dp[i][j] =
          j === dp[i].length - 1
            ? dp[i + 1][j] - dungeon[i][j]
            : Math.min(
                dp[i][j + 1] - dungeon[i][j],
                dp[i + 1][j] - dungeon[i][j]
              );
        if (dp[i][j] < 0) {
          dp[i][j] = 0;
        }
      }
    }
  }
  return dp[0][0] + 1;
};
console.log(
  calculateMinimumHP([
    [-2, -3, 3],
    [-5, -10, 1],
    [10, 30, -5]
  ])
);
