//https://www.nowcoder.com/practice/7bc4a1c7c371425d9faa9d1b511fe193?tpId=117&tqId=37829&companyId=665&rp=1&ru=%2Fcompany%2Fhome%2Fcode%2F665&qru=%2Fta%2Fjob-code-high%2Fquestion-ranking&tab=answerKey
//请实现有重复数字的升序数组的二分查找。
// 输出在数组中第一个大于等于查找值的位置，如果数组中不存在这样的数，则输出数组长度加一。
function upper_bound_(n, v, a) {
  let start = 0;
  let end = n - 1;
  while (start <= end) {
    let middle = parseInt((start + end) / 2);
    if (a[middle] < v) {
      start = middle + 1;
    } else if (a[middle] > v) {
      end = middle - 1;
    } else {
      while (a[middle] >= v) {
        middle--;
      }
      return middle + 2;
    }
  }
  return start + 1;
}

console.log(
  upper_bound_(100, 1, [
    2,
    3,
    4,
    4,
    4,
    7,
    7,
    8,
    10,
    10,
    11,
    12,
    13,
    14,
    15,
    15,
    17,
    18,
    19,
    23,
    24,
    24,
    24,
    24,
    25,
    26,
    26,
    26,
    27,
    27,
    28,
    29,
    29,
    30,
    33,
    36,
    38,
    38,
    40,
    40,
    41,
    43,
    43,
    43,
    44,
    46,
    46,
    47,
    51,
    52,
    52,
    53,
    54,
    56,
    57,
    57,
    57,
    58,
    58,
    61,
    61,
    61,
    62,
    64,
    64,
    66,
    66,
    67,
    67,
    67,
    70,
    72,
    74,
    74,
    74,
    75,
    75,
    78,
    78,
    78,
    79,
    79,
    80,
    83,
    83,
    83,
    83,
    84,
    84,
    86,
    88,
    89,
    89,
    90,
    91,
    91,
    92,
    93,
    93,
    96,
  ]),
);
