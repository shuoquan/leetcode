// 超时版本
// const maxSlidingWindow = function(nums, k) {
//   const result = [];
//   for (let i = 0; i < nums.length - k + 1; i++) {
//     result.push(Math.max(...nums.slice(i, i + k)));
//   }
//   return result;
// };

// 优化后仍超时
const maxSlidingWindow = function(nums, k) {
  const result = [];
  let max = nums[0];
  let slide = [];
  for (let i = 0; i < nums.length - k + 1; i++) {
    if (i === 0) {
      slide = nums.slice(i, i + k);
      max = Math.max(...slide);
      result.push(max);
    } else {
      let head = slide.shift();
      if (head !== max) {
        if (nums[i + k - 1] > max) {
          max = nums[i + k - 1];
        }
        slide.push(nums[i + k - 1]);
      } else {
        if (!slide.includes(max)) {
          slide.push(nums[i + k - 1]);
          max = Math.max(...slide);
        } else {
          slide.push(nums[i + k - 1]);
          if (nums[i + k - 1] > max) {
            max = nums[i + k - 1];
          }
        }
      }
      result.push(max);
    }
  }
  return result;
};

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));

const list = [3, 2, 3];
// list.shift();
console.log(list.shift());
