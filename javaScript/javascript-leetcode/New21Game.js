// const new21Game = function(N, K, W) {
//   const dp = [1];
//   for (let i = 1; i <= N; i++) {
//     if (i === 1) {
//       dp.push(1 / W);
//     } else {
//       let sum = 0;
//       for (let j = 1; j <= W; j++) {
//         if (i - j >= 0 && i - j < K) {
//           sum += dp[i - j] / W;
//         }
//       }
//       dp.push(sum);
//     }
//   }
//   let total = 0;
//   for (let i = K; i <= N; i++) {
//     total += dp[i];
//   }
//   return total > 1 ? 1 : total;
// };

const new21Game = function(N, K, W) {
  if (K === 0) return 1;
  const dp = [1];
  let total = 0;
  for (let i = 1; i <= N; i++) {
    if (i === 1) {
      dp.push(1 / W);
    } else {
      let sum = 0;
      for (let j = i - K + 1 > 0 ? i - K + 1 : 1; j <= W; j++) {
        if (i - j >= 0) {
          sum += dp[i - j] / W;
        }
      }
      dp.push(sum);
    }
    if (i >= K) {
      total += dp[i];
    }
  }
  return total > 1 ? 1 : total;
};

console.log(new21Game(9367,7346,5344));
