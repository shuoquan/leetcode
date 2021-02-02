const compressString = function(S) {
  let result = "";
  let str = "";
  let count = 0;
  for (const s of S) {
    if (str !== s && count) {
      result = result.concat(str, count);
      str = s;
      count = 1;
    } else {
      str = s;
      count += 1;
    }
  }
  result = result.concat(str, count);
  return result.length >= S.length ? S : result;
};

console.log(compressString("aabcccccaaa"));
