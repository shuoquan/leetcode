const insert = (intervals, newInterval) => {
  let flag = false;
  let result = intervals.reduce((last, cur) => {
    if (!flag) {
      if (newInterval[1] < cur[0]) {
        if (last.length && last[last.length - 1][1] === newInterval[0]) {
          last[last.length - 1][1] = newInterval[1];
          last.push(cur);
        } else {
          last.push(newInterval, cur);
        }
        flag = true;
      } else if (
        newInterval[0] < cur[0] &&
        newInterval[1] >= cur[0] &&
        newInterval[1] <= cur[1]
      ) {
        if (last.length && last[last.length - 1][1] === newInterval[0]) {
          last[last.length - 1][1] = cur[1];
        } else {
          last.push([newInterval[0], cur[1]]);
        }
        flag = true;
      } else if (newInterval[0] < cur[0] && newInterval[1] > cur[1]) {
        if (last.length && last[last.length - 1][1] === newInterval[0]) {
          last[last.length - 1][1] = cur[1];
        } else {
          last.push([newInterval[0], cur[1]]);
        }
        newInterval[0] = cur[1];
      } else if (newInterval[0] >= cur[0] && newInterval[1] <= cur[1]) {
        if (last.length && last[last.length - 1][1] === cur[0]) {
          last[last.length - 1][1] = cur[1];
        } else {
          last.push(cur);
        }
        flag = true;
      } else if (
        newInterval[0] >= cur[0] &&
        newInterval[0] <= cur[1] &&
        newInterval[1] > cur[1]
      ) {
        if (last.length && last[last.length - 1][1] === cur[0]) {
          last[last.length - 1][1] = cur[1];
        } else {
          last.push(cur);
        }
        newInterval[0] = cur[1];
      } else if (newInterval[0] > cur[1]) {
        if (last.length && last[last.length - 1][1] === cur[0]) {
          last[last.length - 1][1] = cur[1];
        } else {
          last.push(cur);
        }
      }
    } else if (last.length && last[last.length - 1][1] === cur[0]) {
      last[last.length - 1][1] = cur[1];
    } else {
      last.push(cur);
    }
    return last;
  }, []);
  if (!flag) {
    if (result.length && result[result.length - 1][1] === newInterval[0]) {
      result[result.length - 1][1] = newInterval[1];
    } else {
      result.push(newInterval);
    }
  }
  return result;
};

console.log(insert([[1, 5]], [2, 3]));
// console.log()
