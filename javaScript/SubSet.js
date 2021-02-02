// const subsets = function(nums) {
//   let list = [[]];
//   for (let i = 0; i < nums.length; i += 1) {
//     // const temp = [];
//     // for (let j = 0; j < list.length; j += 1) {
//     //   const x = [...list[j]];
//     //   x.push(nums[i]);
//     //   temp.push(x);
//     // }
//   //   list = list.concat(list.reduce((last,cur)=>{
//   //       []
//   //   }, []));
//   // }
//   // return list;
// };

const subsets = function (nums) {
  return nums.reduce(
    (last, cur) => last.concat(
      last.reduce((l, c) => {
        c = [...c];
        c.push(cur);
        l.push(c);
        return l;
      }, []),
    ),
    [[]],
  );
};
console.log(subsets([1, 2, 3]));
