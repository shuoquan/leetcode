const maxAbsValExpr = function(arr1, arr2) {
  // let max = 0;
  // for (let i = 0; i < arr1.length; i++) {
  //   for (let j = 0; j < arr1.length; j++) {
  //     if (i !== j) {
  //       max = Math.max(
  //         Math.abs(arr1[i] - arr1[j]) +
  //           Math.abs(arr2[i] - arr2[j]) +
  //           Math.abs(i - j),
  //         max
  //       );
  //     }
  //   }
  // }
  // return max;

  const A = [];
  const B = [];
  const C = [];
  const D = [];
  for (let i = 0; i < arr1.length; i++) {
    A.push(arr1[i] + arr2[i] + i);
    B.push(arr1[i] + arr2[i] - i);
    C.push(arr1[i] - arr2[i] + i);
    D.push(arr1[i] - arr2[i] - i);
  }
  return Math.max(
    Math.max.apply(A[0], A) - Math.min.apply(A[0], A),
    Math.max.apply(B[0], B) - Math.min.apply(B[0], B),
    Math.max.apply(C[0], C) - Math.min.apply(C[0], C),
    Math.max.apply(D[0], D) - Math.min.apply(D[0], D)
  );
};
console.log(maxAbsValExpr([1, 2, 3, 4], [-1, 4, 5, 6]));
// console.log(Math.max.apply(1,[1,2,3]))
