const maxSumTwoNoOverlap = function(A, L, M) {
  const smaller = L > M ? M : L;
  const bigger = L > M ? L : M;
  const mapSmaller = Array(A.length - smaller);
  const mapBigger = Array(A.length - bigger);
  for (let i = 0; i <= A.length - smaller; i++) {
    let count = 0;
    let total = 0;
    while (count < smaller) {
      total += A[i + count];
      count += 1;
    }
    mapSmaller[i] = total;
    if (i <= A.length - bigger) {
      while (count < bigger) {
        total += A[i + count];
        count += 1;
      }
      mapBigger[i] = total;
    }
  }
  let max = 0;
  for (let i = 0; i < mapBigger.length; i++) {
    let temp = 0;
    let start = 0;
    while (start < mapSmaller.length) {
      if (start + smaller < i || start > i + bigger - 1)
        temp = Math.max(temp, mapSmaller[start]);
      start += 1;
    }
    max = Math.max(max, mapBigger[i] + temp);
  }
  return max;
};

console.log(maxSumTwoNoOverlap([0, 6, 5, 2, 2], 2, 3));
