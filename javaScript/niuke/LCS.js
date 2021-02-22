// https://www.nowcoder.com/practice/f33f5adc55f444baa0e0ca87ad8a6aac?tpId=188&tqId=37540&rp=1&ru=%2Factivity%2Foj&qru=%2Fta%2Fjob-code-high-week%2Fquestion-ranking&tab=answerKey
// 给定两个字符串str1和str2,输出两个字符串的最长公共子串，如果最长公共子串为空，输出-1。
function LCS(str1, str2) {
  // write code here
  const strlen1 = str1.length;
  const strlen2 = str2.length;
  const matrix = Array(strlen1);
  let max = 0;
  let maxStr = '';
  for (let i = 0; i < strlen1; i++) {
    matrix[i] = Array(strlen2);
    for (let j = 0; j < strlen2; j++) {
      matrix[i][j] = str1[i] === str2[j] ? ((matrix[i - 1] || [0])[j - 1] || 0) + 1 : 0;
      if (max < matrix[i][j]) {
        max = matrix[i][j];
        maxStr = str2.slice(j - max + 1, j + 1);
      }
    }
  }
  return maxStr;
}
module.exports = {
  LCS: LCS,
};
console.log(LCS('123', '13'));
