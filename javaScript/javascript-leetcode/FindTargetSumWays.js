const findTargetSumWays = function(nums, S) {
  if (nums.length === 0) {
    return 0;
  }
  let total = 0;
  if (nums.length === 1) {
    if (nums[0] === S) {
      total += 1;
    }
    if (nums[0] === -S) {
      total += 1;
    }
    return total;
  }
  total = dfs(nums.slice(1), S, nums[0], total);
  total = dfs(nums.slice(1), S, -nums[0], total);
  return total;
};

const dfs = function(nums, s, sum, total) {
  if (nums.length === 1) {
    if (sum + nums[0] === s) {
      total += 1;
    }
    if (sum - nums[0] === s) {
      total += 1;
    }
    return total;
  }
  total = dfs(nums.slice(1), s, sum + nums[0], total);
  total = dfs(nums.slice(1), s, sum - nums[0], total);
  return total;
};

console.log(findTargetSumWays([1], 1));
// console.log([1,2].slice(1))
