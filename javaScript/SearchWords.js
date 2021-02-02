const exist = function(board, word) {
  if (board.length === 0 || word.length === 0) return false;
  let flag = false;
  for (let i = 0; i < board.length; i++) {
    if (flag) {
      return flag;
    }
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === word[0]) {
        const tempBoard = JSON.parse(JSON.stringify(board));
        tempBoard[i][j] = "-";
        flag = dfs(tempBoard, word, i, j, 0, flag);
      }
    }
  }
  return flag;
};

const dfs = function(board, word, row, column, index, flag) {
  if (flag) return flag;
  if (index === word.length - 1) return true;
  if (row - 1 >= 0 && board[row - 1][column] === word[index + 1]) {
    const tempBoard = JSON.parse(JSON.stringify(board));
    tempBoard[row - 1][column] = "-";
    flag = dfs(tempBoard, word, row - 1, column, index + 1, flag);
  }
  if (row + 1 < board.length && board[row + 1][column] === word[index + 1]) {
    const tempBoard = JSON.parse(JSON.stringify(board));
    tempBoard[row + 1][column] = "-";
    flag = dfs(tempBoard, word, row + 1, column, index + 1, flag);
  }
  if (column - 1 >= 0 && board[row][column - 1] === word[index + 1]) {
    const tempBoard = JSON.parse(JSON.stringify(board));
    tempBoard[row][column - 1] = "-";
    flag = dfs(tempBoard, word, row, column - 1, index + 1, flag);
  }
  if (
    column + 1 < board[0].length &&
    board[row][column + 1] === word[index + 1]
  ) {
    const tempBoard = JSON.parse(JSON.stringify(board));
    tempBoard[row][column + 1] = "-";
    flag = dfs(tempBoard, word, row, column + 1, index + 1, flag);
  }
  return flag;
};

console.log(
  exist(
    [
      ["C", "A", "A"],
      ["A", "A", "A"],
      ["B", "C", "D"]
    ],
    "AAB"
  )
);

