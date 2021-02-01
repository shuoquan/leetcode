const integerBreak = function(n) {
  const dp = [0, 0, 1];
  for (let i = 3; i <= n; i++) {
    let max = 0;
    for (let j = 1; j < i; j++) {
      max = Math.max(max, Math.max(j * (i - j), (i - j) * dp[j]));
    }
    dp.push(max);
  }
  return dp[n];
};
console.log(integerBreak(4));
