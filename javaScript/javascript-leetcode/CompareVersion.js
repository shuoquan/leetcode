const compareVersion = function(version1, version2) {
  const list1 = version1.split(".");
  const list2 = version2.split(".");
  let index = 0;
  while (index < list1.length || index < list2.length) {
    if (parseInt(list1[index] || 0) < parseInt(list2[index] || 0)) {
      return -1;
    } else if (parseInt(list1[index] || 0) > parseInt(list2[index] || 0)) {
      return 1;
    } else {
      index += 1;
    }
  }
  return 0;
};

console.log(compareVersion("1.01.1", "1.001"));
