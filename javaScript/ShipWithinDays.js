const shipWithinDays = function(weights, D) {
  let count = 0;
  let weight = weights.reduce((last, cur) => last + cur, 0);
  let left = 1;
  let right = weight;
  while (right-left<=1) {
    let sum = 0;
    for (let i = 0; i < weights.length; i++) {
      sum += weights[i];
      if (sum === weight) {
        sum = 0;
        count += 1;
      }
      if (sum > weight) {
        count += 1;
        i--;
        sum = 0;
      }
    }
    if (sum > 0) {
      count += 1;
    }
    if (count >= D) {
      let temp = weight;
      weight = parseInt((left + right) / 2);
      left = temp;
      count = 0;
    } else if (count < D) {
      let temp = weight;
      weight = parseInt((left + right) / 2);
      right = temp;
      count = 0;
    }
  }
  return weight;
};

console.log(shipWithinDays([3, 2, 2, 4, 1, 4], 3));
// console.log(Math.max.apply(1,[1,2,3]))
