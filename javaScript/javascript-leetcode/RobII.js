const rob = function(nums) {
  const dp = [0];
  const dp1 = [0];
  // 将第一个房子独立，分别考虑其偷与不偷的情况
  // 偷-1
  for (let i = 1; i < nums.length - 1; i++) {
    if (i === 1) {
      dp.push(0);
    } else {
      dp.push(Math.max(dp[i - 2] + nums[i], dp[i - 1]));
    }
  }
  // 不偷-2
  for (let i = 1; i < nums.length; i++) {
    if (i === 1) {
      dp1.push(nums[i]);
    } else {
      dp1.push(Math.max(dp1[i - 2] + nums[i], dp1[i - 1]));
    }
  }
  return Math.max(nums[0] + dp[dp.length - 1], dp1[dp1.length - 1]);
};

console.log(rob([1, 2, 3, 1]));
