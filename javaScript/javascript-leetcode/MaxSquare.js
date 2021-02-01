const maximalSquare = function(matrix) {
  let maxArea = 0;
  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix[0].length; j += 1) {
      if (matrix[i][j] === "1") {
        let m = i;
        let n = j;
        let count = 1;
        while (
          m + 1 < matrix.length &&
          n + 1 < matrix[0].length &&
          matrix[m + 1][j] === "1" &&
          matrix[i][n + 1] === "1"
        ) {
          console.log(m, n, "tt");
          m += 1;
          n += 1;
          let flag = true;
          let index = count - 1;
          while (index > 0) {
            console.log(index, "index");
            if (matrix[m][j + index] !== "1" || matrix[i + index][n] !== "1") {
              flag = false;
              count -= 1;
              break;
            }
            index -= 1;
          }
          if (!flag) {
            break;
          }
          count += 1;
        }
        if (count ** 2 > maxArea) {
          console.log(i, j);
          maxArea = count ** 2;
          console.log(maxArea, 'a')
        }
      }
    }
  }
  return maxArea;
};
// console.log(
//   maximalSquare([
//     ["0", "0", "0", "1", "0", "1", "1", "1"],
//     ["0", "1", "1", "0", "0", "1", "0", "1"],
//     ["1", "0", "1", "1", "1", "1", "0", "1"],
//     ["0", "0", "0", "1", "0", "0", "0", "0"],
//     ["0", "0", "1", "0", "0", "0", "1", "0"],
//     ["1", "1", "1", "0", "0", "1", "1", "1"],
//     ["1", "0", "0", "1", "1", "0", "0", "1"],
//     ["0", "1", "0", "0", "1", "1", "0", "0"],
//     ["1", "0", "0", "1", "0", "0", "0", "0"]
//   ])
// );
console.log(isNaN(parseInt('')))
