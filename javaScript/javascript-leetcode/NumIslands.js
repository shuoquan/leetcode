const numIslands = function(grid) {
  if (grid.length === 0) return 0;
  let start = 2;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "1") {
        grid[i][j] = start;
        dfs(i, j, grid, start);
        start += 1;
      }
    }
  }
  start = 2;
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] >= start) {
        count += 1;
        start += 1;
      }
    }
  }
  return count;
};
const dfs = function(x, y, grid, start) {
  if (x - 1 >= 0 && grid[x - 1][y] === "1") {
    grid[x - 1][y] = start;
    dfs(x - 1, y, grid, start);
  }
  if (x + 1 < grid.length && grid[x + 1][y] === "1") {
    grid[x + 1][y] = start;
    dfs(x + 1, y, grid, start);
  }
  if (y - 1 >= 0 && grid[x][y - 1] === "1") {
    grid[x][y - 1] = start;
    dfs(x, y - 1, grid, start);
  }
  if (y + 1 < grid[0].length && grid[x][y + 1] === "1") {
    grid[x][y + 1] = start;
    dfs(x, y + 1, grid, start);
  }
};

console.log(
  numIslands([
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"]
  ])
);

// console.log('1'>1)
