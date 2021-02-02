const camelMatch = function(queries, pattern) {
  const result = [];
  for (let i = 0; i < queries.length; i++) {
    let k = 0;
    const str = queries[i];
    let flag = true;
    for (let j = 0; j < str.length; j++) {
      if (k === pattern.length && str[j] >= "A" && str[j] <= "Z") {
        flag = false;
        break;
      }
      if (str[j] >= "A" && str[j] <= "Z" && str[j] !== pattern[k]) {
        flag = false;
        break;
      }
      if (str[j] === pattern[k]) {
        k += 1;
      }
    }
    if (k < pattern.length) flag = false;
    result.push(flag);
  }
  return result;
};

console.log(
  camelMatch(
    ["FooBar", "FooBarTest", "FootBall", "FrameBuffer", "ForceFeedBack"],
    "FoBaT"
  )
);
