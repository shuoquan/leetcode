// leetcode 85 和 84 都是典型的使用单调栈的案例
// 本题中targetList数组可以省略
const maximalRectangle = function(matrix) {
  console.log(matrix);
  let max = 0;
  for (let i = 0; i < matrix.length; i++) {
    const targetList = [];
    for (let j = 0; j < matrix[i].length; j++) {
      matrix[i][j] = parseInt(matrix[i][j]);
      if (i > 0) {
        matrix[i][j] = matrix[i][j] ? matrix[i - 1][j] + 1 : 0;
      }
      targetList.push(matrix[i][j]);
    }
    let area = maxArea(targetList);
    if (area > max) {
      max = area;
    }
  }
  return max;
};
// 使用单调栈计算每个最大面积
const maxArea = function(list) {
  if (!list.length) return 0;
  const stack = [0];
  const right = [];
  const left = [];
  for (let i = 1; i < list.length; i++) {
    while (stack.length && list[i] < list[stack[stack.length - 1]]) {
      right[stack.pop()] = i;
    }
    stack.push(i);
  }
  while (stack.length) {
    right[stack.pop()] = list.length;
  }
  stack.push(list.length - 1);
  for (let i = list.length - 2; i >= 0; i--) {
    while (stack.length && list[i] < list[stack[stack.length - 1]]) {
      left[stack.pop()] = i;
    }
    stack.push(i);
  }
  while (stack.length) {
    left[stack.pop()] = -1;
  }
  let max = 0;
  for (let i = 0; i < list.length; i++) {
    const area = (right[i] - left[i] - 1) * list[i];
    if (area > max) {
      max = area;
    }
  }
  return max;
};
console.log(
  maximalRectangle([
    ["1", "0", "1", "0", "0"],
    ["1", "0", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["1", "0", "0", "1", "0"]
  ])
);
