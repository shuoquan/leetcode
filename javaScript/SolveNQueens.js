// N皇后问题，使用递归回溯，中间细节较多
const solveNQueens = function(n) {
  if (n === 0) {
    return [];
  }
  const path = [];
  const result = [];
  for (let i = 0; i < n; i++) {
    trace(path.concat([i]), 0, n, result);
  }
  return result;
};

const trace = function(path, row, n, result) {
  if (path.length === n) {
    result.push(
      path.reduce((last, cur) => {
        let str = "";
        for (let j = 0; j < n; j++) {
          str += j === cur ? "Q" : ".";
        }
        last.push(str);
        return last;
      }, [])
    );
  }
  for (let i = 0; i < n; i++) {
    let flag = true;
    for (let j = 0; j < path.length; j++) {
      if (i === path[j]) {
        flag = false;
        break;
      }
      if (Math.abs((row + 1 - j) / (i - path[j])) === 1) {
        flag = false;
        break;
      }
    }
    if (flag) {
      trace(path.concat([i]), row + 1, n, result);
    }
  }
};

// console.log(solveNQueens(5));

console.log(''.split(','))
console.log('12,12'.split(','))
