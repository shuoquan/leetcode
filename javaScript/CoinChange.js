const coinChange = function(coins, amount) {
  if (amount === 0) {
    return 0;
  }
  coins.sort((a, b) => a - b);
  const dp = [-1];
  for (let i = 1; i <= amount; i++) {
    let min = -1;
    for (let coin of coins) {
      if (i === coin) {
        min = 0;
        break;
      }
      if (i - coin > 0) {
        if (dp[i - coin] > 0) {
          if (min < 0) {
            min = dp[i - coin];
          } else {
            if (min > dp[i - coin]) {
              min = dp[i - coin];
            }
          }
        }
      } else {
        break;
      }
    }
    dp.push(min === -1 ? -1 : min + 1);
  }
  return dp[amount];
};

console.log(coinChange([186, 419, 83, 408], 6249));
