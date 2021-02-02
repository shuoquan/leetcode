const permuteUnique = function(nums) {
  const result = [];
  nums.sort();
  getSubSets(result, nums, []);
  return result;
};
const getSubSets = function(result, nums, path) {
  for (let i = 0; i < nums.length; i += 1) {
    if (i > 0 && nums[i - 1] === nums[i]) continue;
    const newPath = path.concat(nums[i]);
    // newPath.push(nums[i]);
    if (nums.length === 1) {
      result.push(newPath);
      return;
    }
    const temp = nums.filter((value, index) => index !== i);
    getSubSets(result, temp, newPath);
  }
};

console.log(permuteUnique([1,2, 1]));
