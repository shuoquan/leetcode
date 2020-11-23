const nextPermutation = function(nums) {
  let a = -1;
  let b = -1;
  for (let i = nums.length - 1; i >= 0; i -= 1) {
    // let flag = false;
    // let tempIndex = i - 1;
    for (let j = i - 1; j >= 0; j -= 1) {
      if (nums[j] < nums[i] && a < j) {
        // tempIndex = j;
        // flag = true;
        a = j;
        b = i;
        break;
      }
    }
    // if (flag && tempIndex > index) {
    //   index = tempIndex;
    //   finali = i;
    // }
  }
  if (a >= 0) {
    let temp = nums[a];
    nums[a] = nums[b];
    nums[b] = temp;
  }
  for (let i = a + 1; i < nums.length; i += 1) {
    let minIndex = i;
    // let min = nums[minIndex];
    for (let j = i + 1; j < nums.length; j += 1) {
      if (nums[j] < nums[minIndex]) {
        // min = nums[j];
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      const temp = nums[i];
      nums[i] = nums[minIndex];
      nums[minIndex] = temp;
    }
  }
  return nums;
};

console.log(nextPermutation([4,2,0,2,3,2,0]));
