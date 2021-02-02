const canArrange = function(arr, k) {
  const path = Array(k).fill(0);
  arr.forEach(v => {
    path[v % k < 0 ? (v % k) + k : v % k] += 1;
  });
  console.log(path)
  for (let i = 1; i <= parseInt(k / 2); k++) {
    if (path[i] === path[k - i]) {
      return true;
    } else {
      return false;
    }
  }
  if (path[0] % 2) {
    return false;
  }
  if (!k % 2 && path[k / 2] % 2) {
    return false;
  }
  return true;
};
console.log(canArrange([3,8,17,2,5,6], 10));
