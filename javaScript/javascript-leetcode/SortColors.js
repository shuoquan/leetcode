const sortColors = function(nums) {
  let start = 0;
  let end = nums.length - 1;
  while (start < end) {
    if (nums[start] < nums[end]) {
      if (nums[end] === 2) {
        end--;
      }
      if (nums[end] === 1) {
        start++;
      }
    } else if (nums[start] > nums[end]) {
      let temp = nums[start];
      nums[start] = nums[end];
      nums[end] = temp;
      if (temp === 2) {
        end--;
      }
      if (temp === 1) {
        start++;
      }
    } else {
      if (nums[start] === 2) {
        end--;
      }
      if (nums[start] === 0) {
        start++;
      }
      if (nums[start] === 1) {
        let flag = false;
        for (let i = start + 1; i < nums.length; i++) {
          if (nums[i] !== 1) {
            let temp = nums[start];
            nums[start] = nums[i];
            nums[i] = temp;
            flag = true;
            break;
          }
        }
        if (!flag) {
          break;
        }
      }
    }
  }
  console.log(nums);
};

// console.log(sortColors([1, 2, 0]));
const temp = [1,2,3];
temp.splice(1, 1,3);
console.log(temp)
