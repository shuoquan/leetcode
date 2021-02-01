// const numSquares = function(n) {
//   let minLen = n;
//   return dfs([], minLen, n)
// };
//
// const dfs = function(path, minLen, value) {
//   for (let i = parseInt(Math.sqrt(value)); i > 0; i--) {
//     const newPath = path.concat(i ** 2);
//     const newValue = value - i ** 2;
//     if (newValue === 0 && newPath.length < minLen) {
//       minLen = newPath.length;
//     }
//     if (newValue === 0 || newPath.length > minLen) {
//       break;
//     }
//     minLen = dfs(newPath, minLen, newValue);
//   }
//   return minLen;
// };

const numSquares = function(n) {
  const dp = [0, 1, 2, 3];
  for (let i = 4; i <= n; i++) {
    let min = i - 1;
    for (let j = 2; j <= Math.sqrt(n); j++) {
      if (dp[i - j**2] < dp[min]) {
        min = i - j**2;
      }
    }
    dp[i] = dp[min] + 1;
  }
  return dp[n]
};

console.log(numSquares(6665));
console.log(Math.min(12, 1, 2));
// console.log(Math.sqrt(3));
