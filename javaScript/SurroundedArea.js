const solve = function(board) {
  if (board.length === 0) return;
  if (board.length < 3 || board[0].length < 3) return;
  for (let i = 0; i < board[0].length; i++) {
    if (board[0][i] === "O") {
      board[0][i] = "-";
      dfs(0, i, board);
    }
    if (board[board.length - 1][i] === "O") {
      board[board.length - 1][i] = "-";
      dfs(board.length - 1, i, board);
    }
  }
  for (let j = 1; j < board.length - 1; j++) {
    if (board[j][0] === "O") {
      board[j][0] = "-";
      dfs(j, 0, board);
    }
    if (board[j][board[0].length - 1] === "O") {
      board[j][board[0].length - 1] = "-";
      dfs(j, board[0].length - 1, board);
    }
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === "-") {
        board[i][j] = "O";
      } else if (board[i][j] === "O") {
        board[i][j] = "X";
      }
    }
  }
};
const dfs = function(x, y, board) {
  if (x - 1 >= 0 && board[x - 1][y] === "O") {
    board[x - 1][y] = "-";
    dfs(x - 1, y, board);
  }
  if (x + 1 < board.length && board[x + 1][y] === "O") {
    board[x + 1][y] = "-";
    dfs(x + 1, y, board);
  }
  if (y - 1 >= 0 && board[x][y-1] === "O") {
    board[x][y - 1] = "-";
    dfs(x, y - 1, board);
  }
  if (y + 1 < board[0].length && board[x][y + 1] === "O") {
    board[x][y + 1] = "-";
    dfs(x, y + 1, board);
  }
};

const board = [
  ["O", "O", "O"],
  ["O", "O", "O"],
  ["O", "O", "O"]
];
solve(board);
console.log(board);
