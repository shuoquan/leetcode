const findMedianSortedArrays = function(nums1, nums2) {
  const array = nums1.concat(nums2).sort((a, b) => a - b);
  if (array.length % 2) {
    return array[(array.length - 1) / 2];
  } else {
    return (array[array.length / 2 - 1] + array[array.length / 2]) / 2;
  }
};

// const findMedianSortedArrays = function(nums1, nums2) {
//     const totalLen = nums1.length + nums2.length;
//     let middle = totalLen % 2 ? (totalLen - 1) / 2 : totalLen / 2 - 1;
//     nums1.sort((a,b)=>a-b);
//     nums2.sort((a,b)=>a-b);
//     let A = nums1[0];
//     let B = nums2[0];
//     if(A===0)
// };

console.log(findMedianSortedArrays([], []));
