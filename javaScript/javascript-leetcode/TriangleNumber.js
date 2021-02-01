const triangleNumber = function(nums) {
  let count = 0;
  nums.sort((a, b) => a - b);
  // for (let i = 0; i < nums.length; i++) {
  //   for (let j = i + 1; j < nums.length; j++) {
  //     for (let k = j + 1; k < nums.length; k++) {
  //         if(nums[i]+nums[j]>nums[k]){
  //             count++;
  //         }
  //         if(nums[i]+nums[j]<nums[k]){
  //             break;
  //         }
  //     }
  //   }
  // }
  for (let i = 0; i < nums.length - 2; i++) {
    let k = i + 2;
    for (let j = i + 1; j < nums.length - 1 && nums[i]; j++) {
      while (k < nums.length && nums[i] + nums[j] > nums[k]) {
        k++;
      }
      count += (k - j - 1);
    }
  }
  return count;
};
console.log(triangleNumber([2,2,3,3]));
