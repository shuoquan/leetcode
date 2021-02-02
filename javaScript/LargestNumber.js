const largestNumber = function(nums) {
  return nums
    .map(v => v.toString())
    .sort((a, b) => {
      return parseInt(b + a) - parseInt(a + b) > 0 ? 1 : -1;
    })
    .reduce((last, cur) => {
      if (!(cur[0] === "0" && last.length === 1 && last[0] === "0")) {
        last = last.concat(cur);
      }
      return last;
    }, "");
};
console.log(largestNumber([3,30,34,5,9]));
