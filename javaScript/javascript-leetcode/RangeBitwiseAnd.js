const rangeBitwiseAnd = function(m, n) {
  let count = 0;
  while (n !== m) {
    n = n >> 1;
    m = m >> 1;
    count += 1;
  }
  return n << count;
};

console.log(rangeBitwiseAnd(1,1));
// console.log(7 >> 2);
console.log(2<<2)
