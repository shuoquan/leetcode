const minSteps = function(n) {
  const dp = [0, 2];
  for (let i = 2; i < n; i++) {
    let min = 0;
    for (let j = 1; j <= parseInt(Math.sqrt(i + 1)); j++) {
      if (Number.isInteger((i + 1) / j)) {
        const value =
          j === 1
            ? dp[j - 1] + (i + 1) / j
            : Math.min(dp[j - 1] + (i + 1) / j, dp[(i + 1) / j - 1] + j);
        if (value < min && j > 1) {
          min = value;
        }
        if (j === 1) {
          min = value;
        }
      }
    }
    dp.push(min);
  }
  console.log(dp)
  return dp[n - 1];
};
console.log(minSteps(8));
