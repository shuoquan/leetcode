const matrixBlockSum = function(mat, k) {
  if (mat.length === 0) {
    return mat;
  }
  const prefixSum = [];
  for (let i = 0; i < mat.length; i++) {
    prefixSum.push(Array(mat[i].length));
    for (let j = 0; j < mat[i].length; j++) {
      prefixSum[i][j] =
        ((prefixSum[i - 1] || [0])[j] || 0) +
        ((prefixSum[i] || [0])[j - 1] || 0) -
        ((prefixSum[i - 1] || [0])[j - 1] || 0) +
        mat[i][j];
    }
  }
  console.log(prefixSum);
  const dp = [];
  for (let i = 0; i < mat.length; i++) {
    dp.push(Array(mat[i].length));
    for (let j = 0; j < mat[i].length; j++) {
      dp[i][j] = prefixSum[i + k]
        ? prefixSum[i + k][j + k < mat[0].length ? j + k : mat[0].length - 1]
        : prefixSum[prefixSum.length - 1][
            j + k < mat[0].length ? j + k : mat[0].length - 1
          ] -
          (prefixSum[i + k]
            ? prefixSum[i + k][j - k - 1] || 0
            : prefixSum[mat[0].length - 1][j - k - 1] || 0) -
          (prefixSum[i - k - 1] ? prefixSum[i - k - 1][j + k - 1] || 0 : 0) +
          (prefixSum[i - k - 1] ? prefixSum[i - k - 1][j - k - 1] || 0 : 0);
    }
  }
  return dp;
  // return dp;
};
console.log(
  matrixBlockSum(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ],
    1
  )
);
// console.log([1][-1])
