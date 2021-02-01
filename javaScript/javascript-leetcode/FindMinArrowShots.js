const findMinArrowShots = function(points) {
  if (points.length === 0) return 0;
  points.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  let intersection = [];
  let count = 0;
  for (let i = 0; i < points.length; i++) {
    if (i === 0) {
      intersection = [points[i][0], points[i][1]];
    } else {
      if (points[i][0] > intersection[1]) {
        count += 1;
        intersection = [points[i][0], points[i][1]];
      } else {
        intersection = [points[i][0], Math.min(intersection[1], points[i][1])];
      }
    }
  }
  return count + 1;
};
console.log(
  findMinArrowShots([
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8]
  ])
);
