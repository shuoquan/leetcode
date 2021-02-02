const partition = function(s) {
  if (s.length === 0) {
    return [[]];
  }
  if (s.length === 1) {
    return [[s]];
  }
  let result = [];
  for (let i = 1; i <= s.length; i++) {
    const newStr = s.slice(0, i);
    if (isPlalindrome(newStr)) {
      result = dfs([newStr], s.slice(i), result);
    }
  }
  return result;
};

const dfs = function(path, s, result) {
  if (s.length === 0) {
    result.push(path);
    return result;
  }
  if (s.length === 1) {
    result.push(path.concat(s));
    return result;
  }
  for (let i = 1; i <= s.length; i++) {
    const newStr = s.slice(0, i);
    if (isPlalindrome(newStr)) {
      result = dfs(path.concat(newStr), s.slice(i), result);
    }
  }
  return result;
};

const isPlalindrome = function(str) {
  let flag = true;
  let i = 0;
  let j = str.length - 1;
  while (i < j) {
    if (str[i] !== str[j]) {
      flag = false;
      break;
    }
    i += 1;
    j -= 1;
  }
  return flag;
};

console.log(partition("cdd"));
