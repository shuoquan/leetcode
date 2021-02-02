// const subarraySum = function(nums, k) {
//   let count = 0;
//   for (let i = 0; i < nums.length; i++) {
//     let index = i;
//     let sum = 0;
//     while (index < nums.length) {
//       sum += nums[index];
//       if (sum === k) {
//         count++;
//       }
//       index++;
//     }
//   }
//   return count;
// };

// const subarraySum = function(nums, k) {
//   const sumArray = nums.reduce((last, cur, index) => {
//     last.push((last[index - 1] || 0) + cur);
//     return last;
//   }, []);
//   let count = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (sumArray[i] === k) {
//       count += 1;
//     }
//     for (let j = i + 1; j < nums.length; j++) {
//       if (sumArray[j] === sumArray[i] + k) {
//         count += 1;
//       }
//       if (sumArray[j] > sumArray[i] + k) {
//         break;
//       }
//     }
//   }
//   return count;
// };

const subarraySum = function(nums, k) {
  const map = {};
  let sum = 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum === k) {
      count += 1;
    }
    if (map[sum - k]) {
      count += map[sum - k];
    }
    if (map[sum]) {
      map[sum] += 1;
    } else {
      map[sum] = 1;
    }
  }
  return count;
};
console.log(subarraySum([1, -1, 0], 0));
