const test = function() {
  const result = [];
  for (let i = 0; i < 10; i++) {
    dfs(result);
  }
  console.log(result);
};

const dfs = function(result) {
  result.push(Math.random() * 10);
  return result;
};

test();
