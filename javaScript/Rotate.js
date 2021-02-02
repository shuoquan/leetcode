const rotate = function(nums, k) {
  let total = 0;
  let target = nums[0];
  let index = 0;
  let start = 0;
  while (total < nums.length) {
    let temp = target;
    index = (index + k) % nums.length;
    target = nums[index];
    nums[index] = temp;
    if (index === start) {
      index += 1;
      start += 1;
      target = nums[start];
    }
    total += 1;
  }
  return nums;
};
// console.log(rotate([-1, -100, 3, 99], 3));
// console.log(rotate([1, 2, 3, 4, 5], 2));
console.log("123".split('/'))
