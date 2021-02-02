const canFinish = function(numCourses, prerequisites) {
  const matrix = Array(numCourses);
  for (let i = 0; i < numCourses; i++) {
    matrix[i] = Array(numCourses).fill(0);
  }
  for (let i = 0; i < prerequisites.length; i++) {
    for (let j = 1; j < prerequisites[i].length; j++) {
      if (prerequisites[i][j] >= numCourses) return false;
      matrix[prerequisites[i][j - 1]][prerequisites[i][j]] = 1;
    }
  }
  console.log(matrix);
};
console.log(canFinish(2, [[1, 0]]));
