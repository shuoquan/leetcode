// const maxScoreSightseeingPair = function(A) {
//     let max = 0;
//     for (let i = 0; i < A.length; i++) {
//         for (let j = i + 1; j < A.length; j++) {
//             max = Math.max(max, A[i] + A[j] + i - j);
//         }
//     }
//     return max;
// };
const maxScoreSightseeingPair = function(A) {
  let max = 0;
  // let dp = [A[0]];
  let maxIndex = 0;
  for (let i = 1; i < A.length; i++) {
    if (A[i - 1] + i - 1 > A[maxIndex] + maxIndex) {
      maxIndex = i - 1;
    }
    if (A[i] - i + A[maxIndex] + maxIndex > max) {
      max = A[i] - i + A[maxIndex] + maxIndex;
    }
  }
  return max;
};

console.log(maxScoreSightseeingPair([8, 1, 5, 2, 6]));
