// https://www.nowcoder.com/practice/e016ad9b7f0b45048c58a9f27ba618bf?tpId=117&tqId=37791&rp=1&ru=%2Factivity%2Foj&qru=%2Fta%2Fjob-code-high%2Fquestion-ranking&tab=answerKey
// 题目描述
// 有一个整数数组，请你根据快速排序的思路，找出数组中第K大的数。
//
// 给定一个整数数组a,同时给定它的大小n和要找的K(K在1到n之间)，请返回第K大的数，保证答案存在

// 前置知识 快速排序
function quickSort(arr, start, end) {
  const tempStart = start;
  const tempEnd = end;
  let index = start;
  if (start >= end) {
    return;
  }
  while (start < end) {
    while (arr[end] >= arr[index] && end > start) {
      end--;
    }
    let temp = arr[end];
    arr[end] = arr[index];
    arr[index] = temp;
    index = end;
    while (arr[start] <= arr[index] && end > start) {
      start++;
    }
    temp = arr[start];
    arr[start] = arr[index];
    arr[index] = temp;
    index = start;
  }
  quickSort(arr, tempStart, index - 1);
  quickSort(arr, index + 1, tempEnd);
}
// const arr = [3, 5, 2, 2];
// quickSort(arr, 0, 3);
// console.log(arr);

function findKth(a, n, K) {
  let index = 0;
  let start = 0;
  let end = n - 1;
  while (index !== n- K) {
    index = start;
    const tempStart = start;
    const tempEnd = end;
    while (start < end) {
      while (a[end] >= a[index] && end > start) {
        end--;
      }
      let temp = a[end];
      a[end] = a[index];
      a[index] = temp;
      index = end;
      while (a[start] <= a[index] && end > start) {
        start++;
      }
      temp = a[start];
      a[start] = a[index];
      a[index] = temp;
      index = start;
    }
    if (index == n- K) {
      return a[index];
    } else if (index < n-K) {
      start = index + 1;
      end = tempEnd;
    } else {
      start = tempStart;
      end = index - 1;
    }
  }
}
console.log(
  findKth(
    [
      1332802,
      1177178,
      1514891,
      871248,
      753214,
      123866,
      1615405,
      328656,
      1540395,
      968891,
      1884022,
      252932,
      1034406,
      1455178,
      821713,
      486232,
      860175,
      1896237,
      852300,
      566715,
      1285209,
      1845742,
      883142,
      259266,
      520911,
      1844960,
      218188,
      1528217,
      332380,
      261485,
      1111670,
      16920,
      1249664,
      1199799,
      1959818,
      1546744,
      1904944,
      51047,
      1176397,
      190970,
      48715,
      349690,
      673887,
      1648782,
      1010556,
      1165786,
      937247,
      986578,
      798663,
    ],
    49,
    24,
  ),
);
