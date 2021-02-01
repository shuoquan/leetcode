const findLength = function(A, B) {
  let maxLen = 0;
  for (let i = 0; i < B.length; i++) {
    for (let j = 0; j < A.length; j++) {
      let count = 0;
      if (B[i] === A[j]) {
        count += 1;
        let k = j + 1;
        let t = i + 1;
        while (k < A.length && t < B.length && B[t] === A[k]) {
          count += 1;
          k += 1;
          t += 1;
        }
        if (count > maxLen) {
          maxLen = count;
        }
      }
    }
  }
  return maxLen;
};

console.log(
  findLength([0, 0, 0, 0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0])
);
