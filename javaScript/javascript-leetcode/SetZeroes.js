const setZeroes = function(matrix) {
  if (matrix.length === 0) return matrix;
  const columnList = [];
  const rowList = [];
  for (let i = 0; i < matrix.length; i += 1) {
    rowList.push(0);
  }
  for (let j = 0; j < matrix[0].length; j += 1) {
    columnList.push(0);
  }
  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix[0].length; j += 1) {
      if (matrix[i][j] === 0) {
        rowList[i] = 1;
        columnList[j] = 1;
      }
    }
  }
  for (let i = 0; i < rowList.length; i += 1) {
    if (rowList[i]) {
      for (let j = 0; j < columnList.length; j += 1) {
        matrix[i][j] = 0;
      }
    }
  }
  for (let i = 0; i < columnList.length; i += 1) {
    if (columnList[i]) {
      for (let j = 0; j < rowList.length; j += 1) {
        matrix[j][i] = 0;
      }
    }
  }
  return matrix;
};

console.log(
  setZeroes([
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5]
  ])
);
