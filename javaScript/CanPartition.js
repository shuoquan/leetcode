// const canPartition = function(nums) {
//   // const path = [];
//   // let flag = false;
//   // flag = dfs(path, nums, flag, 0);
//   // return flag;
//   for (let i = 0; i < 2 ** nums.length; i++) {
//     const str = parseInt(i)
//       .toString(2)
//       .padStart(nums.length, 0);
//     let left = 0;
//     let right = 0;
//     for (let j = 0; j < str.length; j++) {
//       if (str[j] == "0") {
//         left += nums[j];
//       } else {
//         right += nums[j];
//       }
//     }
//     if (left === right) {
//       return true;
//     }
//   }
//   return false;
// };

// const dfs = function(path, nums, flag, start) {
//   // console.log(flag)
//   for (let i = start; i < nums.length; i++) {
//     if (flag) return flag;
//     flag = dfs(path.concat(0), nums, flag, start + 1);
//     flag = dfs(path.concat(1), nums, flag, start + 1);
//   }
//   if (path.length === nums.length) {
//     console.log(path);
//     let left = 0;
//     let right = 0;
//     for (let i = 0; i < path.length; i++) {
//       if (path[i] === 0) {
//         left += nums[i];
//       } else {
//         right += nums[i];
//       }
//     }
//     if (left === right) {
//       flag = true;
//     }
//   }
//   return flag;
// };

const canPartition = function(nums) {
  let sum = nums.reduce((last, cur) => last + cur, 0);
  if (sum % 2) {
    return false;
  }
  sum = sum / 2;
  const dp = Array(sum + 1).fill(false);
  dp[0] = true;
  for (let i = 0; i < nums.length; i++) {
    for (let j = sum; j >= 0; j--) {
      dp[j] = dp[j] || (j - nums[i] >= 0 && dp[j - nums[i]]);
    }
    // 下面注释内容为错误方法，会导致数字被重复使用
    // for (let j = 0; j <= sum; j++) {
    //   dp[j] = dp[j] || (j - nums[i] >= 0 && dp[j - nums[i]]);
    // }
  }
  console.log(dp)
  return dp[sum];
};
console.log(
  canPartition([1,2,5])
);
// console.log(parseInt(15).toString(2).padStart(4, 0))
