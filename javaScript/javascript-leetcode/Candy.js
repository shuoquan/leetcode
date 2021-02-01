const candy = function(ratings) {
  const dp = Array(ratings.length).fill(0);
  const map = {};
  ratings.forEach((v, index) => {
    if (map[v]) {
      map[v].push(index);
    } else {
      map[v] = [index];
    }
  });
  Object.keys(map).forEach(v => {
    map[v].forEach(item => {
      let max = Math.max(dp[item - 1] || 0, dp[item + 1] || 0);
      // if (max === 0) max = 1;
      let maxIndex = 0;
      if (item - 1 < 0) {
        maxIndex = item + 1;
      } else if (item + 1 >= dp.length) {
        maxIndex = item - 1;
      } else {
        maxIndex = max === dp[item - 1] ? item - 1 : item + 1;
      }
      dp[item] = map[v].includes(maxIndex) ? max - 1 : max + 1;
      if (!dp[item]) dp[item] = 1;
    });
  });
  console.log(dp);
  return dp.reduce((last, cur) => {
    return last + cur;
  }, 0);
};
console.log(candy([1, 3, 2, 2, 1]));
