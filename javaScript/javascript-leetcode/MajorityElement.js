const majorityElement = function(nums) {
  if (nums.length < 3) {
    return [...new Set(nums)];
  }
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (i === nums.length - 1 && Object.keys(obj).length === 0) {
        return []
    }
    if (Object.keys(obj).length < 3) {
      obj[nums[i]] = (obj[nums[i]] || 0) + 1;
    }
    if (Object.keys(obj).length === 3) {
      Object.keys(obj).forEach(v => {
        if (obj[v] > 1) {
          obj[v] -= 1;
        } else {
          delete obj[v];
        }
      });
    }
  }
  if (nums.length === 3) {
    return Object.keys(obj).filter(v => obj[v] > 1);
  }
  return Object.keys(obj);
};
// const majorityElement = function(nums) {
//   const result = nums.reduce((last, cur) => {
//     last[cur] = (last[cur] || 0) + 1;
//     return last;
//   }, {});
//   return Object.keys(result).filter(v => result[v] > nums.length / 3);
// };
console.log(majorityElement([1, 2, 3, 4]));
