const canCross = function(stones) {
  const map = {};
  let step = 1;
  for (let i = 1; i < stones.length; i++) {
    for (let j = i + 1; j < stones.length; j++) {
      if (stones[j] - stones[i] === step - 1) {
        // map[stones[j]] =
      }
    }
  }
};

