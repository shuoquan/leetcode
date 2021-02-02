const possibleBipartition = function(N, dislikes) {
  const A = [];
  const B = [];
  let index = 0;
  let flag = true;
  return dfs(index, A, B, dislikes, flag);
};

const dfs = function(index, A, B, dislikes, flag) {
  while (index < dislikes.length) {
    if (index === 0) {
      A.push(dislikes[index][0]);
      B.push(dislikes[index][1]);
    } else {
      if (A.includes(dislikes[index][0]) && A.includes(dislikes[index][1])) {
        return false;
      } else if (
        B.includes(dislikes[index][0]) &&
        B.includes(dislikes[index][1])
      ) {
        return false;
      } else if (
        A.includes(dislikes[index][0]) &&
        !B.includes(dislikes[index][1])
      ) {
        B.push(dislikes[index][1]);
      } else if (
        B.includes(dislikes[index][0]) &&
        !A.includes(dislikes[index][1])
      ) {
        A.push(dislikes[index][1]);
      } else {
        flag = dfs(
          index + 1,
          A.concat(dislikes[index][0]),
          B.concat(dislikes[index][1]),
          dislikes,
          flag
        );
        if (!flag) return false;
        flag = dfs(
          index + 1,
          A.concat(dislikes[index][1]),
          B.concat(dislikes[index][0]),
          dislikes,
          flag
        );
        if (!flag) return false;
      }
    }
    index++;
  }
  return flag;
};

console.log(
  possibleBipartition(5, [
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
    [1, 5]
  ])
);
