const findMaxForm = function(strs, m, n) {
  const result = strs.reduce((last, cur) => {
    const res = [0, 0];
    for (let i = 0; i < cur.length; i++) {
      if (cur[i] === "0") {
        res[0] += 1;
      } else {
        res[1] += 1;
      }
    }
    last.push(res);
    return last;
  }, []);
  const dp = Array(m + 1);
  for (let i = 0; i < m + 1; i++) {
    dp[i] = Array(n + 1).fill(0);
  }
  // 避免重复，使用倒序
  for (let i = 0; i < result.length; i++) {
    for (let j = dp.length-1; j >=0; j--) {
      for (let k = dp[j].length-1; k >=0; k--) {
        if (j - result[i][0] >= 0 && k - result[i][1] >= 0) {
          dp[j][k] = Math.max(
            dp[j - result[i][0]][k - result[i][1]] + 1,
            dp[j][k]
          );
        }
      }
    }
  }
  return dp[m][n];
};

console.log(findMaxForm(["10", "0001", "111001", "1", "0"], 4, 3));
