/*
 * question 1
 * listForChose: 所有可以选取的值
 * sum: 和
 * 目标： 从listForChose中选取所有和为sum的组合，可以重复， 比如sum=5，listForChose[1,2,5], 那么[1,1,1,1,1]是其中的一个解
 * 采用方案: 回溯法
 */
// const arr = new Array(11).fill(0);
// const listForChose = [1, 2, 5];
// function search(sum, m) {
//   console.log(sum, m);
//   for (let i = 1; i <= sum; i += 1) {
//     if (i >= arr[m - 1] && listForChose.includes(i)) {
//       arr[m] = i;
//       const rest = sum - i;
//       if (rest === 0 && m >= 1) {
//         console.log(arr.slice(1, m + 1));
//       } else {
//         search(rest, m + 1);
//       }
//       arr[m] = 0;
//     }
//   }
// }
// search(20, 1);

// 三数之和 LeetCode 15
// const threeSum = function (nums) {
//   const targetList = [];
//   const strList = [];
//   const sortNums = nums.sort((a, b) => a - b);
//   const len = nums.length;
//   if (len < 3) return [];
//   for (let i = 0; i < len - 2 && sortNums[i] <= 0; i++) {
//     for (let j = i + 1; j < len - 1; j++) {
//       if (sortNums[i] + sortNums[j] > 0) break;
//       for (let k = j + 1; k < len; k++) {
//         if (sortNums[i] + sortNums[j] + sortNums[k] === 0) {
//           const str = [sortNums[i], sortNums[j], sortNums[k]].join('');
//           if (!strList.includes(str)) {
//             targetList.push([sortNums[i], sortNums[j], sortNums[k]]);
//             strList.push(str);
//           }
//         }
//       }
//     }
//   }
//   return targetList;
// };
// console.log(threeSum([-1, 0, 1, 2, -1, -4]));
//
// console.log([2, 1, 3].sort((a, b) => a - b).join(''));

// 区间合并
// const flag = true;
// const intervals = [[4, 5], [2, 4], [4, 6], [3, 4], [0, 0], [1, 1], [3, 5], [2, 2]];
// const len = intervals.length;
// for (let i = 0; i < len; i += 1) {
//   let index = i;
//   for (let j = i + 1; j < len; j += 1) {
//     if (intervals[index][0] > intervals[j][0]) {
//       index = j;
//     }
//   }
//   const swap = intervals[i];
//   intervals[i] = intervals[index];
//   intervals[index] = swap;
// }
// console.log(intervals);
// const temp = [];
// intervals.forEach((v) => {
//   const tempLen = temp.length;
//   if (tempLen === 0) {
//     temp.push(v);
//   } else {
//     const list = temp[tempLen - 1];
//     if (list[1] < v[0]) {
//       temp.push(v);
//     } else if (list[1] >= v[0] && list[1] < v[1]) {
//       temp[tempLen - 1] = [list[0], v[1]];
//     }
//   }
// });
// console.log(temp);

// 水桶问题
// const bucket = (list) => {
//   let index = 0;
//   let maxCapacity = 0;
//   const listLen = list.length;
//   for (let i = 0; i < listLen; i++) {
//     const target = list[i];
//     console.log(target, 't', i);
//     let amount = 0;
//     for (let j = 0; j < listLen && j !== i; j++) {
//       console.log(i, '9999');
//       if (list[j] > target) {
//         console.log(list[j], 'j', i + 1, j);
//         let start = i + 1;
//         while (start <= j) {
//           amount += target;
//           console.log(amount, 'a');
//           start += 1;
//         }
//         index = j;
//       }
//     }
//     console.log(amount, 'ff');
//     if (amount > maxCapacity) maxCapacity = amount;
//   }
//   return maxCapacity;
// };
//
// console.log(bucket([1, 8, 6, 2, 5, 4, 8, 3, 7]));

// 计算最接近目标的三数和
// const threeNumSum = (numList, target) => {
//   // 排序
//   numList.sort((a, b) => a - b);
//   const i = 0;
//   const j = 1;
//   let z = numList.length - 1;
//   let sum = 0;
//   let diff = 0;
//   const minus = 0;
//   const plus = 0;
//   while (j < z - 1 || i < j - 1) {
//     sum = numList[i] + numList[j] + numList[z];
//     if (sum > target) {
//       if (z > j + 1) {
//         z -= 1;
//         const temp = sum - target;
//         if (temp < diff) {
//           diff = temp;
//         }
//       }
//     } else if (sum === target) {
//       return [numList[i], numList[j], numList[k]];
//     } else if (sum < target) {
//
//     }
//   }
// };

// const sum = [1,3,5,2];
// sum.sort((a,b)=>a-b)
// console.log(sum)

// 递归解决打家劫舍问题，LeetCode， 超出空间
// const rob = function (nums) {
//   if (!nums.length) return 0;
//   if (nums.length === 1) {
//     return nums[0];
//   }
//   const robCurrent = nums[0] + rob(nums.slice(2));
//   const robNext = rob(nums.slice(1));
//   return robCurrent > robNext ? robCurrent : robNext;
// };

// const rob = function (nums) {
//   if (!nums.length) return 0;
//   if (nums.length === 1) {
//     return nums[0];
//   }
//   const dp = [nums[0]];
//   dp.push(nums[0] > nums[1] ? nums[0] : nums[1]);
//   for (let i = 2; i < nums.length; i += 1) {
//     dp.push(Math.max(nums[i] + dp[i - 2], dp[i - 1]));
//   }
//   return dp[nums.length - 1];
// };
// // console.log(rob([1, 2, 13, 2, 3, 4, 6]));
// const nums = new Array(5);
// nums[3] = 4;
// console.log(nums);

// leetcode 46 数字翻译字符串 动态规划问题
// const translateNum = function (num) {
//   const str = num.toString();
//   if (str.length === 0) {
//     return 0;
//   }
//   if (str.length === 1) {
//     return 1;
//   }
//   const dp = [1, parseInt(str) > 25 ? 1 : 2];
//   for (let i = 2; i < str.length; i += 1) {
//     const param = parseInt(str.slice(-2));
//     dp.push(dp[i - 1] - 1 + dp[i - 2] + (param <= 25 && param >= 10 ? 1 : 0));
//   }
//   return dp[str.length - 1];
// };
// console.log(translateNum('624'));
// // const str = "123";
// // console.log(str.slice(-2));
//
// const isValidSudoku = function (board) {
//   const columnList = [];
//   for (let i = 0; i < 9; i += 1) {
//     columnList.push([
//       board[i][0],
//       board[i][1],
//       board[i][2],
//       board[i][3],
//       board[i][4],
//       board[i][5],
//       board[i][6],
//       board[i][7],
//       board[i][8],
//     ]);
//   }
//   let flag = true;
//   for (let i = 0; i < 9; i += 1) {
//     const rowObj = {};
//     const columnObj = {};
//     const targetList = [
//       board[0][i],
//       board[1][i],
//       board[2][i],
//       board[3][i],
//       board[4][i],
//       board[5][i],
//       board[6][i],
//       board[7][i],
//       board[8][i],
//     ];
//     for (let j = 0; j < 9; j++) {
//       if (rowObj[board[i][j]]) {
//         flag = false;
//         break;
//       } else if (!isNaN(parseInt(board[i][j], 10))) {
//         rowObj[board[i][j]] = true;
//       }
//       if (columnObj[targetList[j]]) {
//         flag = false;
//         break;
//       } else if (!isNaN(parseInt(targetList[j], 10))) {
//         columnObj[targetList[j]] = true;
//       }
//     }
//     if (!flag) break;
//   }
//   if (!flag) return false;
//   for (let i = 0; i < 9; i += 3) {
//     for (let j = 0; j < 9; j += 3) {
//       const obj = {};
//       const target = [
//         board[i][j],
//         board[i][j + 1],
//         board[i][j + 2],
//         board[i + 1][j],
//         board[i + 1][j + 1],
//         board[i + 1][j + 2],
//         board[i + 2][j],
//         board[i + 2][j + 1],
//         board[i + 2][j + 2],
//       ];
//       for (const item of target) {
//         if (obj[item]) {
//           flag = false;
//           break;
//         } else if (!isNaN(parseInt(item, 10))) {
//           obj[item] = true;
//         }
//       }
//       if (!flag) {
//         flag = false;
//         break;
//       }
//     }
//     if (!flag) {
//       flag = false;
//       break;
//     }
//   }
//   return flag;
// };
//
// console.log(
//   isValidSudoku([
//     ['.', '.', '.', '.', '5', '.', '.', '1', '.'],
//     ['.', '4', '.', '3', '.', '.', '.', '.', '.'],
//     ['.', '.', '.', '.', '.', '3', '.', '.', '1'],
//     ['8', '.', '.', '.', '.', '.', '.', '2', '.'],
//     ['.', '.', '2', '.', '7', '.', '.', '.', '.'],
//     ['.', '1', '5', '.', '.', '.', '.', '.', '.'],
//     ['.', '.', '.', '.', '.', '2', '.', '.', '.'],
//     ['.', '2', '.', '9', '.', '.', '.', '.', '.'],
//     ['.', '.', '4', '.', '.', '.', '.', '.', '.'],
//   ]),
// );

// leetcode 300 最长子序列
// const lengthOfLIS = function (nums) {
//   const maxSubLenList = [];
//   let max = 0;
//   for (let i = 0; i < nums.length; i += 1) {
//     if (i === 0) {
//       maxSubLenList[i] = 1;
//       max = 1;
//     } else {
//       let diff = 0;
//       for (let j = 0; j < i; j += 1) {
//         if (nums[j] < nums[i] && maxSubLenList[j] > diff) {
//           diff = maxSubLenList[j];
//         }
//       }
//       if (diff + 1 > max) {
//         max = diff + 1;
//       }
//       maxSubLenList.push(diff + 1);
//     }
//   }
//   return max;
// };
//
// console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));

// leetcode322 硬币找零 时间超出未通过
// const coinChange = function (coins, amount) {
//   const coinList = [];
//   if (amount === 0) {
//     return 0;
//   }
//   for (let i = 0; i < amount; i += 1) {
//     if (i === 0) {
//       coinList.push(coins.includes(i + 1) ? 1 : -1);
//     } else if (coins.includes(i + 1)) {
//       coinList.push(1);
//     } else {
//       let min = amount + 1;
//       for (let j = 0; j < i; j += 1) {
//         if (coinList[j] !== -1 && coins.includes(i - j) && min > coinList[j]) {
//           min = coinList[j];
//         }
//       }
//       coinList.push(min === amount + 1 ? -1 : min + 1);
//     }
//   }
//   return coinList[amount - 1];
// };
// console.log(coinChange([1, 2, 5], 11));

const maxAreaOfIsland = function(grid) {
  const matrix = [];
  let index = 0;
  while (index < grid.length) {
    matrix.push(new Array(grid[index].length).fill(0, 0));
    index += 1;
  }
  let maxNum = 0;
  for (let i = 0; i < grid.length; i += 1) {
    const row = grid[i];
    const path = [];
    let num = 0;
    for (let j = 0; j < row.length; j += 1) {
      if (row[j] && !matrix[i][j]) {
        // matrix[i][j] = 1;
        path.push([i, j]);
        matrix[i][j] = 1;
        num = 1;
      }
      while (path.length) {
        const curPos = path.shift();
        const x = curPos[0];
        const y = curPos[1];
        if (x - 1 >= 0 && grid[x - 1][y] && !matrix[x - 1][y]) {
          path.push([x - 1, y]);
          matrix[x - 1][y] = 1;
          num += 1;
        }
        if (x + 1 < grid.length && grid[x + 1][y] && !matrix[x + 1][y]) {
          path.push([x + 1, y]);
          matrix[x + 1][y] = 1;
          num += 1;
        }
        if (y - 1 >= 0 && grid[x][y - 1] && !matrix[x][y - 1]) {
          path.push([x, y - 1]);
          matrix[x][y - 1] = 1;
          num += 1;
        }
        if (y + 1 < grid[i].length && grid[x][y + 1] && !matrix[x][y + 1]) {
          path.push([x, y + 1]);
          matrix[x][y + 1] = 1;
          num += 1;
        }
      }
      if (num > maxNum) {
        maxNum = num;
      }
      num = 0;
    }
  }
  return maxNum;
};

// const result = maxAreaOfIsland([
//   [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
//   [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
//   [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
// ]);
// console.log(result);

// const intersection = function(nums1, nums2) {
//   const longNum = nums1.length > nums2.length ? nums1 : nums2;
//   const shortNum = nums1.length > nums2.length ? nums2 : nums1;
//   const shortNumSet = [...new Set(shortNum)];
//   return shortNumSet.reduce((last, cur) => {
//     if (longNum.includes(cur)) {
//       last.push(cur);
//     }
//     return last;
//   }, []);
// };
// const nums1 = [4, 9, 5];
// const nums2 = [9, 4, 9, 8, 4];
// console.log(intersection(nums1, nums2));

// 1414. 和为 K 的最少斐波那契数字数目
// 贪心算法
// const findMinFibonacciNumbers = function (k) {
//   const arrList = [1, 1];
//   if (k === 1 || k === 2) return 1;
//   let sum = arrList[arrList.length - 2] + arrList[arrList.length - 1];
//   while (sum <= k) {
//     arrList.push(sum);
//     sum = arrList[arrList.length - 2] + arrList[arrList.length - 1];
//   }
//   let index = arrList.length - 1;
//   let total = 0;
//   while (k > 0) {
//     while (arrList[index] > k) {
//       index -= 1;
//     }
//     k -= arrList[index];
//     total += 1;
//   }
//   return total;
// };
// findMinFibonacciNumbers(7);

// leetcode28. 实现 strStr()
// const strStr = function(haystack, needle) {
//
// };

// const str = "12323";
// const substr = "23";
// console.log(str.indexOf(substr))

// const nthUglyNumber = function(n) {
//   const primeList = [2, 3, 5];
//   let start = 1;
//   while (n > 0) {
//     if (start === 1) {
//       n -= 1;
//       start += 1;
//     } else {
//       let temp = start;
//       while (temp >= 1) {
//         const target = primeList.find(v => temp % v === 0);
//         if (!target) {
//           start += 1;
//           break;
//         }
//         temp /= target;
//         if (temp === 1) {
//           n -= 1;
//           start += 1;
//           break;
//         }
//       }
//     }
//   }
//   return start - 1;
// };

// const nthUglyNumber = function (n) {
//   const total = n;
//   const list = [1];
//   let i = 0;
//   let j = 0;
//   let k = 0;
//   while (n > 0) {
//     if (n === 1) {
//       n -= 1;
//     } else {
//       const minNum = Math.min(list[i] * 2, list[j] * 3, list[k] * 5);
//       if (minNum === list[i] * 2) {
//         i += 1;
//       }
//       if (minNum === list[j] * 3) {
//         j += 1;
//       }
//       if (minNum === list[k] * 5) {
//         k += 1;
//       }
//       n -= 1;
//       list.push(minNum);
//     }
//   }
//   return list[total - 1];
// };
//
// console.log(nthUglyNumber(1352));
// console.log(Math.min(1, 3, -1));
// 402653184
// const result = [1, 2, 3].find(v => v === 4);
// console.log(result);

// 440. 字典序的第K小数字
const findKthNumber = function(n, k) {
  while (k > 0) {
    let index = 1;
    while (index < 10) {
      let count = 0;
      let curNum = index;
      while (curNum <= n) {
        count += 1;
        curNum *= 10;
        const temp = k;
        const base = 10 ** (count - 1);
        k -= (index + 1) * base - 1 > n ? n - base * index + 1 : base;
        if (k <= 0) {
          return index * 10 ** (count - 1) + temp - 1;
        }
      }
      index += 1;
    }
  }
};
//
// let x = 3;
// console.log(10 ** x)
// console.log(findKthNumber(10, 3));

const findKthBit = function(n, k) {
  return getTargetNum(n)[k - 1];
};

// const getTargetNum = function (n) {
//   if (n === 1) {
//     return '0';
//   }
//   const result = getTargetNum(n - 1);
//   let str = '';
//   for (const s of result) {
//     str = (s === '0' ? '1' : '0').concat(str);
//   }
//   return `${result}1${str}`;
// };
//
// console.log(findKthBit(3,1));

// 题目描述
// 给出一个仅包含字符'(',')','{','}','['和']',的字符串，判断给出的字符串是否是合法的括号序列
// 括号必须以正确的顺序关闭，"()"和"()[]{}"都是合法的括号序列，但"(]"和"([)]"不合法。
// function isValid(s) {
//   const stack = [];
//   for (const str of s) {
//     if (str === '{' || str === '[' || str === '(') {
//       stack.push(str);
//     } else if (str === '}') {
//       if (stack.pop() !== '{') {
//         return false;
//       }
//     } else if (str === ']') {
//       if (stack.pop() !== '[') {
//         return false;
//       }
//     } else if (str === ')') {
//       if (stack.pop() !== '(') {
//         return false;
//       }
//     }
//   }
//   return stack.length === 0;
// }
//
// console.log(isValid("[]"))

// 快速排序算法实现
function quickSort(arr, start, end) {
  if (start > end) {
    return;
  }
  const ref = arr[start];
  let i = start + 1;
  let j = end;
  let index = start;
  while (i < j) {
    while (arr[j] >= ref) {
      j -= 1;
    }
    if (j >= start) {
      arr[index] = arr[j];
      index = j;
      arr[j] = ref;
    }
    while (arr[i] <= ref) {
      i += 1;
    }
    if (i <= end && i < j) {
      arr[index] = arr[i];
      index = i;
      arr[i] = ref;
    }
  }
  quickSort(arr, 0, index - 1);
  quickSort(arr, index + 1, end);
}

// arr = [1,2,3];
// quickSort(arr, 0, 4);
// console.log(arr);

// const findMaxLength = function(nums) {
//   let max = 0;
//   for(let i = 0 ; i<nums.length; i+=1)
//   {
//     for(let j=i+1;j<nums.length; j+=1) {
//
//     }
//   }
// };

const breakPalindrome = function(palindrome) {
  let target = palindrome;
  let index = 0;
  while (index < palindrome.length) {
    if (palindrome[index] > "a") {
      const temp = palindrome
        .slice(0, index)
        .concat(
          String.fromCharCode(palindrome[index].charAt() - 1),
          palindrome.slice(index + 1)
        );
      if (temp < target) {
        target = temp;
      }
    }
    index += 1;
  }
  return target;
};

// console.log(breakPalindrome("abccba"));

// console.log("abc" > "abd")
// console.log(String.fromCharCode(97 + 1))
//
// console.log('b'.charCodeAt())

const str1 = "123";
const str2 = str1;
// console.log(str1.charAt(1))
// console.log(str1.split("").join(""));
// str1[1] = "4";
// console.log(str1, str2);
console.log(str1.slice(0, 0));

// const maxDistToClosest = function(seats) {
//   const totalSeat = seats.length;
//   let index = 0;
//   let max = 0;
//   while (index < totalSeat) {
//     if (seats[index] === 0) {
//       let left = index - 1;
//       let right = index + 1;
//       while (left >= 0 && seats[left] === 0) {
//         left -= 1;
//       }
//       while (right < totalSeat && seats[right] === 0) {
//         right += 1;
//       }
//       let value = index - left < right - index ? index - left : right - index;
//       if (index === 0) {
//         value = right - index;
//       }
//       if (index === totalSeat - 1) {
//         value = index - left;
//       }
//       if (value > max) {
//         max = value;
//       }
//     }
//     index += 1;
//   }
//   return max;
// };
//
// console.log(maxDistToClosest([1, 0, 0, 0, 1, 0, 1]));

console.log(new Date().getMonth())

console.log('1' * 1 + '1' * 1);
