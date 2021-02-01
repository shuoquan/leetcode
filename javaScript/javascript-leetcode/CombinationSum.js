// const combinationSum = function(candidates, target) {
//   candidates.sort();
//   let total = parseInt(target / candidates[0]);
//   const result = [];
//   let tempList = candidates.reduce((last, cur) => {
//     if (cur === target) {
//       result.push([cur]);
//     } else {
//       last.push([cur]);
//     }
//     return last;
//   }, []);
//   while (total > 0) {
//     let index = 0;
//     const list = [];
//     while (index < tempList.length) {
//       let j = 0;
//       const sum = tempList[index].reduce((last, cur) => {
//         last += cur;
//         return last;
//       }, 0);
//       if (sum > target) {
//         break;
//       }
//       while (j < candidates.length) {
//         const tempSum = sum + candidates[j];
//         if (tempSum === target) {
//           const value = [...tempList[index], candidates[j]];
//           let k = 0;
//           let flag = false;
//           while (k < result.length) {
//             if (
//               result[k].length === value.length &&
//               result[k].sort().toString() === value.sort().toString()
//             ) {
//               flag = true;
//               break;
//             }
//             k += 1;
//           }
//           if (!flag) {
//             result.push(value);
//           }
//         } else if (tempSum > target) {
//           break;
//         } else {
//           list.push([...tempList[index], candidates[j]]);
//         }
//         j += 1;
//       }
//       index += 1;
//     }
//     tempList = list;
//     total -= 1;
//   }
//   return result;
// };

// 1.0 数字可以重复使用
// const combinationSum = function(candidates, target) {
//   candidates.sort((a,b)=>a-b);
//   const existPath = [];
//   const result = [];
//   dfs(candidates, 0, target, existPath, result);
//   return result;
// };
//
// const dfs = function(candidates, begin, target, path, result) {
//   if (target === 0) {
//     result.push([...path]);
//     return;
//   }
//   for (let i = begin; i < candidates.length; i += 1) {
//     if (target - candidates[i] < 0) {
//       break;
//     }
//     path.push(candidates[i]);
//     dfs(candidates, i, target - candidates[i], path, result);
//     path.pop();
//   }
// };

// 2.0 数组不可以重复使用
const combinationSum2 = function(candidates, target) {
  candidates.sort((a, b) => a - b);
  const existPath = [];
  const result = [];
  dfs2(candidates, 0, target, existPath, result);
  return result;
};

const dfs2 = function(candidates, begin, target, path, result) {
  if (target === 0) {
    result.push([...path]);
    return;
  }
  for (let i = begin; i < candidates.length; i += 1) {
    if (i > begin && candidates[i] === candidates[i - 1]) continue;
    if (target - candidates[i] < 0) {
      break;
    }
    path.push(candidates[i]);
    dfs2(candidates, i + 1, target - candidates[i], path, result);
    path.pop();
  }
};

console.log(combinationSum2([1, 2, 2, 2], 5));


