const change = function(amount, coins) {
  // coins.sort();
  const dp = [1].concat(Array(amount).fill(0));
  // for (let i = 1; i <= amount; i++) {
  //   let sum = 0;
  //   for (let j = coins.length - 1; j >= 0; j--) {
  //     if (i - coins[j] >= 0 && i+1 >= (2*coins[j])) {
  //       sum += dp[i - coins[j]];
  //     }
  //   }
  //   dp.push(sum);
  // }
  // console.log(dp);
  for (let i = 0; i < coins.length; i++) {
    for (let j = 1; j <amount+1; j++) {
      if (j - coins[i] >= 0) {
        dp[j] += dp[j - coins[i]];
      }
    }
  }
  return dp[amount];
};
console.log(change(5, [1, 2, 5]));
