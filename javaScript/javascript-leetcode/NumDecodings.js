const numDecodings = function(s) {
  const result = [];
  if (s.length < 0) {
    return 0;
  }
  for (let i = 0; i < s.length; i += 1) {
    if (i === 0) {
      result.push(parseInt(s[i]) > 0 ? 1 : 0);
    } else if (i === 1) {
      result.push((parseInt(s[0]) > 0 && parseInt(s[1]) > 0 ? 1 : 0) +
        (parseInt(s[0] + s[1]) >= 10 && parseInt(s[0] + s[1]) <= 26 ? 1 : 0));
    } else {
      const temp = parseInt(s[i - 1] + s[i]);
      result.push(
        (parseInt(s[i]) > 0 ? result[i - 1] : 0) +
          (temp >= 10 && temp <= 26 ? result[i - 2] : 0)
      );
    }
  }
  return result[s.length - 1];
};
console.log(numDecodings("10011"));
