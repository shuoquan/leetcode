const generateParenthesis = function (n) {
  if (n <= 0) return [];
  const arr = ['('];
  const result = [];
  let i = 1;
  while (i < 2 ** (2 * n - 1) - 1) {
    if (i % 2) {
      arr.push('(');
    } else {
      arr.push(')');
    }
    i += 1;
  }
  let index = 4 ** (n - 1) - 1;
  while (index < arr.length) {
    let temp = '';
    let start = index;
    while (start > 0) {
      temp = arr[start].concat(temp);
      start = parseInt((start - 1) / 2);
    }
    temp = '('.concat(temp, ')');
    if (checkValidParenthesis(temp)) {
      result.push(temp);
    }
    index += 1;
  }
  return result;
};

const checkValidParenthesis = function (str) {
  const stack = [];
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === '(') {
      stack.push(str[i]);
    } else if (stack.pop() !== '(') {
      return false;
    }
  }
  return !stack.length;
};

console.log(generateParenthesis(3));
console.log(checkValidParenthesis('()))))'))
