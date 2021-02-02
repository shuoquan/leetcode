// const longestSubsequence = function(arr, difference) {
//   // arr.sort((a, b) => difference > 0 ? (a - b) : (b-a));
//   // console.log(arr)
//   const arrFlag = Array(arr.length).fill(1);
//   let max = 1;
//   for (let i = 0; i < arr.length; i++) {
//     if (arrFlag[i]) {
//       let j = i + 1;
//       let count = 1;
//       let value = arr[i];
//       while (j < arr.length) {
//         if (arr[j] === value + difference) {
//           value = arr[j];
//           count += 1;
//           arrFlag[j] = 0;
//         }
//         j += 1;
//       }
//       if (count > max) {
//         max = count;
//       }
//     }
//   }
//   return max;
// };

const longestSubsequence = function(arr, difference) {
  const dp = {};
  for (let i = 0; i < arr.length; i++) {
    if (dp[arr[i] - difference]) {
      dp[arr[i]] = dp[arr[i] - difference] + 1;
    } else {
      dp[arr[i]] = 1;
    }
  }
  return Math.max.apply(1, Object.values(dp));
};
console.log(
  longestSubsequence([4, 12, 10, 0, -2, 7, -8, 9, -9, -12, -12, 8, 8], 0)
);


console.log([1,2].slice(1,0))
console.log(Array.from('1,23'))
