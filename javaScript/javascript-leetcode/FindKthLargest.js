const findKthLargest = function(nums, k) {
  // return nums.sort((a, b) => b - a)[k - 1];
  for (let i = 0; i < k; i++) {
    let maxIndex = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] > nums[maxIndex]) {
        maxIndex = j;
      }
    }
    const temp = nums[maxIndex];
    nums[maxIndex] = nums[i];
    nums[i] = temp;
  }
  return nums[k-1];
};
// console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));


const userInfo = {
  roleId : 9,
}
switch (userInfo.roleId) {
  case 0:
    userInfo.roleId = 3;
    break;
  case 3:
    userInfo.roleId = 4;
    break;
  case 4:
    userInfo.roleId = 3;
    break;
    console.log('jj')
}

