const singleNonDuplicate = function(nums) {
  let result = "";
  result = binarySearch(0, nums.length - 1, nums, result);
  return result;
};

const binarySearch = function(start, end, nums, result) {
  if (result) {
    return result;
  }
  let middle = parseInt((start + end) / 2);
  if (nums[middle] != nums[middle - 1] && nums[middle] != nums[middle + 1]) {
    result = nums[middle];
  } else {
    if (start <= middle - 1) {
      result = binarySearch(start, middle - 1, nums, result);
    }
    if (middle + 1 <= end) {
      result = binarySearch(middle + 1, end, nums, result);
    }
  }
  return result;
};

// const singleNonDuplicate = function(nums) {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== nums[i - 1] && nums[i] !== nums[i + 1]) return nums[i];
//   }
// };

console.log(singleNonDuplicate([1, 1, 3, 3, 4, 4, 7, 8, 8]));
