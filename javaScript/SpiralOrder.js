const spiralOrder = function(matrix) {
  let step = 1;
  if (matrix.length === 0) return [];
  let top = 0;
  let right = matrix[0].length - 1;
  let bottom = matrix.length - 1;
  let left = 0;
  let i = 0;
  let j = 0;
  const result = [];
  let total = matrix.length * matrix[0].length;
  while (total > 0) {
    result.push(matrix[i][j]);
    total -= 1;
    if (step === 1) {
      if (j < right) {
        j += 1;
      } else {
        step = 2;
        i += 1;
        top += 1;
      }
    } else if (step === 2) {
      if (i < bottom) {
        i += 1;
      } else {
        step = 3;
        j -= 1;
        right -= 1;
      }
    } else if (step === 3) {
      if (j > left) {
        j -= 1;
      } else {
        step = 4;
        i -= 1;
        bottom -= 1;
      }
    } else if (step === 4) {
      if (i > top) {
        i -= 1;
      } else {
        step = 1;
        j += 1;
        left += 1;
      }
    }
  }
  return result;
};

console.log(spiralOrder([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]))
