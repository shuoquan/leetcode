const letterCombinations = function (digits) {
  const letterMap = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };
  let result = [];
  for (let i = 0; i < digits.length; i += 1) {
    if (i === 0) {
      for (let j = 0; j < letterMap[digits[i]].length; j += 1) {
        result.push(letterMap[digits[i]][j]);
      }
    } else {
      const temp = [];
      for (let k = 0; k < result.length; k += 1) {
        for (let j = 0; j < letterMap[digits[i]].length; j += 1) {
          temp.push(result[k].concat(letterMap[digits[i]][j]));
        }
      }
      result = temp;
    }
  }
  return result;
};

console.log(letterCombinations('23'));
