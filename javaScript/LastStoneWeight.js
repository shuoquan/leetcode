const lastStoneWeight = function(stones) {
  if (stones.length === 1) {
    return stones[0];
  }
  stones.sort((a, b) => a - b);
  while (stones.length > 1) {
    const a = stones.pop();
    const b = stones.pop();
    const diff = a - b > 0 ? a - b : b - a;
    const index = stones.findIndex(v => v > diff);
    stones.splice(index, 0, diff);
  }
  return stones[0];
};
// console.log(lastStoneWeight([2, 2]));

const a = 1;
const b = 2;
function getNum(a) {
  console.log(a);
  return a;
}

console.log(getNum(a) > getNum(b) ? getNum(a) : getNum(b));
