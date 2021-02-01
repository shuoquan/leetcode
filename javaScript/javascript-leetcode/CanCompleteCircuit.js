const canCompleteCircuit = function(gas, cost) {
  for (let i = 0; i < gas.length; i++) {
    if (gas[i] >= cost[i]) {
      let remain = gas[i] - cost[i];
      let start = (i + 1) % gas.length;
      let flag = 1;
      while (start !== i) {
        remain += gas[start] - cost[start];
        if (remain < 0) {
          flag = 0;
          break;
        }
        start = (start + 1) % gas.length;
      }
      if (flag) {
        return i;
      }
    }
  }
  return -1;
};

console.log(canCompleteCircuit([3, 3, 4], [3, 4, 4]));
