const canReorderDoubled = function(A) {
  A.sort((a, b) => a - b);
  const map = {};
  for (let i = 0; i < A.length; i++) {
    if (map[A[i] / 2]) {
      if (map[A[i] / 2] === 1) delete map[A[i] / 2];
      else map[A[i] / 2] -= 1;
      continue;
    }
    if (map[A[i] * 2]) {
      if (map[A[i] * 2] === 1) delete map[A[i] * 2];
      else map[A[i] * 2] -= 1;
      continue;
    }
    if (map[A[i]]) {
      map[A[i]] += 1;
    }
    if (!map[A[i]]) {
      map[A[i]] = 1;
    }
  }
  return Object.keys(map).length ? false : true;
};
console.log(
  canReorderDoubled([
    -62,
    86,
    96,
    -18,
    43,
    -24,
    -76,
    13,
    -31,
    -26,
    -88,
    -13,
    96,
    -44,
    9,
    -20,
    -42,
    100,
    -44,
    -24,
    -36,
    28,
    -32,
    58,
    -72,
    20,
    48,
    -36,
    -45,
    14,
    24,
    -64,
    -90,
    -44,
    -16,
    86,
    -33,
    48,
    26,
    29,
    -84,
    10,
    46,
    50,
    -66,
    -8,
    -38,
    92,
    -19,
    43,
    48,
    -38,
    -22,
    18,
    -32,
    -48,
    -64,
    -10,
    -22,
    -48
  ])
);
