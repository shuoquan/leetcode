// const kthSmallest = function(matrix, k) {
//   return matrix
//     .reduce((last, cur) => {
//       return last.concat(cur);
//     }, [])
//     .sort((a, b) => a - b)[k-1];
// };
const kthSmallest = function(matrix, k) {
  for (let i = 0; i < matrix.length; i++) {
    let temp = [];
    let index = i;
    while (index >= 0) {
      temp.push(matrix[i - index][index]);
      index--;
    }
    temp.sort((a, b) => a - b);
    if (temp.length >= k) {
      return temp[k - 1];
    } else {
      k -= temp.length;
    }
  }
  for (let i = matrix.length - 1; i > 0; i--) {
    let temp = [];
    let index = i;
    while (index > 0) {
      temp.push(matrix[matrix.length - 1 - i + index][matrix.length - index]);
      index--;
    }
    temp.sort((a, b) => a - b);
    if (temp.length >= k) {
      return temp[k - 1];
    } else {
      k -= temp.length;
    }
  }
};
// console.log(
//   kthSmallest(
//     [
//       [1, 3, 5],
//       [6, 7, 12],
//       [11, 14, 14]
//     ],
//     3
//   )
// );

const s = '1';
console.log(s.split(','))
