const productExceptSelf = function(nums) {
  const forwardProduct = [nums[0]];
  const reverseProduct = [nums[nums.length - 1]];
  for (let i = 1; i < nums.length - 1; i++) {
    forwardProduct.push(forwardProduct[i - 1] * nums[i]);
    reverseProduct.push(reverseProduct[i - 1] * nums[nums.length - 1 - i]);
  }
  const result = [];
  result.push(reverseProduct[nums.length - 2]);
  for (let i = 1; i < nums.length - 1; i++) {
    result.push(
      (forwardProduct[i - 1]) * (reverseProduct[nums.length - 2 - i])
    );
  }
  result.push(forwardProduct[nums.length - 2]);
  return result;
};
console.log(productExceptSelf([0, 4, 0]));
