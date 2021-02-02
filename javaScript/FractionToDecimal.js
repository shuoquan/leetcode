const fractionToDecimal = function(numerator, denominator) {
  const str = (numerator / denominator).toString();
  let result = "";
  let meetDot = false;
  for (let i = 0; i < str.length; i++) {
    if (!meetDot) {
      result += str[i];
    }
  }
};

// console.log((4 / 333).toString());
const a = 4;
const b = 333;
const c = parseFloat(4 / 333);
console.log(c);
