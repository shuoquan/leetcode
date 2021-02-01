const permute = function(nums) {
  const result = [];
  getSubSets(result, nums, []);
  return result;
};
const getSubSets = function(result, nums, path) {
  for (let i = 0; i < nums.length; i += 1) {
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

console.log(permute([1, 2, 3, 4]));
const x = [1, 2, 3];
// const y = x.filter((value, index)=>index!==2);
// console.log(x, y)
//
// x.remove();
// console.log(x)
