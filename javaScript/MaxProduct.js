// const maxProduct = function(nums) {
//   let maxValue = nums[0];
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i; j < nums.length; j++) {
//       let value = 1;
//       for (let k = i; k <= j; k++) {
//         value *= nums[k];
//       }
//       if (value > maxValue) {
//         maxValue = value;
//       }
//     }
//   }
//   return maxValue;
// };

const maxProduct = function(nums) {
  let min = nums[0];
  let max = nums[0];
  let value = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] >= 0) {
      min = Math.min(min * nums[i], nums[i]);
      max = Math.max(max * nums[i], nums[i]);
    } else {
      let temp = min;
      min = Math.min(max * nums[i], nums[i]);
      max = Math.max(temp * nums[i], nums[i]);
    }
    value = Math.max(value, max);
  }
  return value;
};
console.log(maxProduct([2, -2, 3]));
// console.log(Number.MAX_VALUE)
