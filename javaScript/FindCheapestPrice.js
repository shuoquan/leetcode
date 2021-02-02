const findCheapestPrice = function(n, flights, src, dst, K) {
  const path = Array(flights.length).fill(Array(flights.length).fill({}));
  for (let i = 0; i < flights.length; i++) {
      if(!path[flights[i][0]][flights[i][1]][1]){
          path[flights[i][0]][flights[i][1]][1] = flights[i][2];
      }
  }
};
console.log(
  findCheapestPrice(
    3,
    [
      [0, 1, 100],
      [1, 2, 100],
      [0, 2, 500]
    ],
    0,
    2,
    1
  )
);

console.log({}=={})
