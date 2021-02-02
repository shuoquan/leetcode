const grayCode = function(n) {
  const result = [];
  for (let i = 0; i < 2 ** n; i++) {
    result.push(i^i>>1);
  }
  return result;
};
console.log(grayCode(2))

