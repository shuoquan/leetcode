const getPermutation = function(n, k) {
  const list = [];
  const targetList = [];
  for (let i = 1; i <= n; i += 1) {
    list.push(i);
  }
  findPath(list, k, [], targetList);
  return targetList[0].join("");
};
const findPath = function(list, k, path, targetList) {
  for (let i = 0; i < list.length; i += 1) {
    if (k === 0) {
      break;
    }
    const newPath = path.concat(list[i]);
    if (list.length === 1) {
      k -= 1;
      if (k === 0) {
        targetList.push(newPath);
      }
      break;
    }
    const newList = list.filter((value, index) => index !== i);
    k = findPath(newList, k, newPath, targetList);
  }
  return k;
};

console.log(getPermutation(4, 2));
// console.log([1,2].join(''))
