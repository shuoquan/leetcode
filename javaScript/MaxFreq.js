// 超时
// const maxFreq = function(s, maxLetters, minSize, maxSize) {
//   let max = 0;
//   for (let i = 0; i < s.length - minSize + 1; i++) {
//     const target = s.slice(i, i + minSize);
//     if (target.length !== minSize || [...new Set(target)].length > maxLetters) {
//       continue;
//     }
//     let count = 1;
//     for (let j = i + 1; j < s.length - minSize + 1; j++) {
//       const str = s.slice(j, j + minSize);
//       if (target === str) {
//         count += 1;
//       }
//     }
//     max = Math.max(max, count);
//   }
//   return max;
// };

// 改良版 空间换时间
const maxFreq = function(s, maxLetters, minSize, maxSize) {
  const map = { "0": 0 };
  for (let i = 0; i < s.length - minSize + 1; i++) {
    const target = s.slice(i, i + minSize);
    if (target.length !== minSize || [...new Set(target)].length > maxLetters) {
      continue;
    }
    if (map[target]) {
      map[target] += 1;
    } else {
      map[target] = 1;
    }
  }
  return Math.max(...Object.values(map));
};

console.log(maxFreq("abcde", 2, 3, 3));
console.log([...new Set([1, 2, 2])]);
