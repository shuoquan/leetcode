const reconstructQueue = function(people) {
  return people
    .sort((a, b) => (a[0] !== b[0] ? b[0] - a[0] : a[1] - b[1]))
    .reduce((lst, cur) => {
      lst.splice(cur[1], 0, cur);
      return lst;
    }, []);
};
console.log(
  reconstructQueue([
    [7, 1],
    [4, 4],
    [7, 1],
    [5, 0],
    [6, 1],
    [5, 2]
  ])
);
// const x = [];
// x.splice(0,0,0)
// console.log(x)
