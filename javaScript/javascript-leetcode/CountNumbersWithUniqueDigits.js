const countNumbersWithUniqueDigits = function(n) {
  let sum = 0;
  if (n === 0) {
    return 1;
  }
  for (let i = 1; i <= n; i++) {
    if (i === 1) {
      sum += 10;
    } else {
      let mul = 1;
      let start = 9;
      let total = i;
      while (total > 0) {
        mul *= start;
        if (total !== i) {
          start -= 1;
        }
        total -= 1;
      }
      sum += mul;
    }
  }
  return sum;
};
console.log(countNumbersWithUniqueDigits(11));
