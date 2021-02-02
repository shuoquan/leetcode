const fourSumCount = function(A, B, C, D) {
  let result = {};
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < B.length; j++) {
      const sum = A[i] + B[j];
      if (result[sum]) {
        result[sum] += 1;
      } else {
        result[sum] = 1;
      }
    }
  }
  let count = 0;
  for (let i = 0; i < C.length; i++) {
    for (let j = 0; j < D.length; j++) {
      const sum = C[i] + D[j];
      if (result[-sum]) {
        count += result[-sum];
      }
    }
  }
  return count;
};

console.log(fourSumCount([1, 2], [-2, -1], [-1, 2], [0, 2]));

console.log(5&6&7)
