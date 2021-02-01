const subsetsWithDup = function(nums) {
  const results = [[]];
  nums.sort();
  console.log(nums);
  getSubSets(results, nums, []);
  return results;
};

const getSubSets = function(results, nums, path) {
  for (let i = 0; i < nums.length; i += 1) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    const newPath = path.concat(nums[i]);
    results.push(newPath);
    getSubSets(
      results,
      nums.filter((value, index) => index > i),
      newPath
    );
  }
};

console.log(subsetsWithDup([1, 1, 2, 2]));
// console.log([1,2].filter((x,y)=>{
//     console.log(x, y)
// }))
