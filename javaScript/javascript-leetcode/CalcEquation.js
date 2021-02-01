// leetcode 399 采用数学方法解决(核心思想是设置一个原始单位量，中间的细节难点是区分不同的单位量)  另外可以采取图思想中Floyd算法解决
const calcEquation = function(equations, values, queries) {
  const map = {};
  let type = 1;
  map[equations[0][1]] = [1, type];
  map[equations[0][0]] = [values[0], type];
  const list = [equations[0][0], equations[0][1]];
  const flag = Array(equations.length).fill(0);
  flag[0] = 1;
  while (flag.some(v => !v)) {
    const index = equations.findIndex(
      (v, idx) => !flag[idx] && (list.includes(v[0]) || list.includes(v[1]))
    );
    if (index > 0) {
      if (map[equations[index][0]]) {
        map[equations[index][1]] = [
          map[equations[index][0]][0] / values[index],
          map[equations[index][0]][1]
        ];
        list.push(equations[index][1]);
      } else if (map[equations[index][1]]) {
        map[equations[index][0]] = [
          map[equations[index][1]][0] * values[index],
          map[equations[index][1]][1]
        ];
        list.push(equations[index][0]);
      }
      flag[index] = 1;
    } else {
      type += 1;
      const idx = flag.findIndex(v => !v);
      map[equations[idx][1]] = [1, type];
      map[equations[idx][0]] = [values[idx], type];
      list.push(equations[idx][0]);
      list.push(equations[idx][1]);
      flag[idx] = 1;
    }
  }
  const result = [];
  for (let i = 0; i < queries.length; i++) {
    if (
      map[queries[i][0]] &&
      map[queries[i][1]] &&
      map[queries[i][0]][1] === map[queries[i][1]][1]
    ) {
      result.push(map[queries[i][0]][0] / map[queries[i][1]][0]);
    } else {
      result.push(-1);
    }
  }
  return result;
};

console.log(
  calcEquation(
    [
      ["a", "b"],
      ["e", "f"],
      ["b", "e"]
    ],
    [3.4, 1.4, 2.3],
    [
      ["b", "a"],
      ["a", "f"],
      ["f", "f"],
      ["e", "e"],
      ["c", "c"],
      ["a", "c"],
      ["f", "e"]
    ]
  )
);
