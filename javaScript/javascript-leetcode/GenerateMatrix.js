const generateMatrix = function(n) {
  let sum = 0;
  let target = n ** 2;
  const matrix = [];
  for (let i = 0; i < n; i++) {
    matrix[i] = Array(n);
  }
  let i = 0;
  let j = 0;
  let top = 0;
  let right = n - 1;
  let bottom = n - 1;
  let left = 0;
  let step = 1;
  while (sum < target) {
    matrix[i][j] = sum + 1;
    sum += 1;
    if (step === 1) {
      if (j < right) {
        j += 1;
      } else {
        top += 1;
        i += 1;
        step = 2;
      }
    } else if (step === 2) {
      if (i < bottom) {
        i += 1;
      } else {
        right -= 1;
        j -= 1;
        step = 3;
      }
    } else if (step === 3) {
      if (j > left) {
        j -= 1;
      } else {
        bottom -= 1;
        i -= 1;
        step = 4;
      }
    } else if (step === 4) {
      if (i > top) {
        i -= 1;
      } else {
        left += 1;
        j += 1;
        step = 1;
      }
    }
  }
  return matrix;
};
console.log(generateMatrix(6));
