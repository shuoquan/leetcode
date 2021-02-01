const longestPalindromeSubseq = function(s) {
  const dp = [];
  for (let i = s.length - 1; i >= 0; i--) {
    dp[i] = Array(s.length).fill(0);
    for (let j = i; j < s.length; j++) {
      if (i === j) {
        dp[i][j] = 1;
      } else {
        if (s[i] === s[j]) {
          dp[i][j] = dp[i + 1][j - 1] + 2;
        } else {
          dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
        }
      }
    }
  }
  return dp[0][s.length - 1];
};

// const isPalindrome = function (str) {
//     let i = 0;
//     let j = str.length - 1;
//     while (i < j) {
//         if (str[i] !== str[j]) {
//             return false;
//         }
//         i += 1;
//         j -= 1;
//     }
//     return true;
// };
console.log(longestPalindromeSubseq("abcabcabcabc"));
