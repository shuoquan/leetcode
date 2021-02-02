const removeDuplicates = function(nums) {
  if (nums.length === 0) return nums;
  let curIndex = 0;
  let curValue = nums[0];
  let count = 0;
  for (let i = 0; i < nums.length; i += 1) {
    if (curValue === nums[i]) {
      count += 1;
    } else {
      count = 1;
      curValue = nums[i];
    }
    if (count <= 2) {
      nums[curIndex] = nums[i];
      curIndex += 1;
    }
  }
  return curIndex;
};
const list = [0,0,1,1,1,1,2,3,3];
console.log(removeDuplicates(list))
console.log(list)
