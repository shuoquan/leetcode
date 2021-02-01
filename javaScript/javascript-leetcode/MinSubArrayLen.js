// const minSubArrayLen = function(s, nums) {
//   let min = 0;
//   for (let i = 0; i < nums.length; i++) {
//     let sum = 0;
//     for (let j = i; j < nums.length; j++) {
//       sum += nums[j];
//       if (sum >= s) {
//         if (min === 0) {
//           min = j - i + 1;
//         } else {
//           if (j - i + 1 < min) {
//             min = j - i + 1;
//           }
//         }
//       }
//     }
//   }
//   return min;
// };

const minSubArrayLen = function(s, nums) {
  let min = 0;
  let end = 0;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = end; j < nums.length; j++) {
      sum += nums[j];
      if (sum >= s) {
        if (min === 0) {
          min = j - i + 1;
        } else {
          if (j - i + 1 < min) {
            min = j - i + 1;
          }
        }
        end = j;
        sum = sum - (nums[i] + nums[j]);
        break;
      }
      if (j === nums.length - 1) {
        return min;
      }
    }
  }
  return min;
};

console.log(minSubArrayLen(80, [10,5,13,4,8,4,5,11,14,9,16,10,20,8]));
