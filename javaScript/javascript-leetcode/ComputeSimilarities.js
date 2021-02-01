const computeSimilarities = function(docs) {
  const result = [];
  const wordMap = {};
  const map = [];
  for (let i = 0; i < docs.length; i++) {
    map.push(Array(docs[i].length).fill(0));
  }
  for (let i = 0; i < docs.length; i++) {
    for (let j = 0; j < docs[i].length; j++) {
      if (!wordMap[docs[i][j]]) {
        wordMap[docs[i][j]] = [i];
      } else {
        for (let k = 0; k < wordMap[docs[i][j]].length; k++) {
          if (!map[wordMap[docs[i][j]][k]][i]) {
            map[wordMap[docs[i][j]][k]][i] = 1;
            const same = docs[wordMap[docs[i][j]][k]].filter(v =>
              docs[i].includes(v)
            ).length;
            result.push(
              `${wordMap[docs[i][j]][k]},${i}: ${parseFloat(
                same /
                  (docs[i].length + docs[wordMap[docs[i][j]][k]].length - same)
              ).toFixed(4)}`
            );
          }
        }
        wordMap[docs[i][j]].push(i);
      }
    }
  }
  return result;
};

console.log(
  computeSimilarities([
    [3722, 26354],
    [5476, 9892, 60292, 90762, 35531, 5199, 76176, 16596],
    [27427, 81667, 1613, 70007, 75900],
    [1396, 5407],
    [7117, 5965, 15405, 81980, 81846, 91223, 89436],
    [65025, 9892, 69707, 7117, 1613, 16398, 55956, 67832, 88346],
    [48200, 3722, 99375, 74768, 1457, 12211, 39388, 67710],
    [89250, 5407, 53864, 19691, 76940, 5965, 883, 1181, 46975],
    [29384, 5199, 1396, 21269, 75095, 70585, 85726, 95135],
    [1457, 5476]
  ])
);
