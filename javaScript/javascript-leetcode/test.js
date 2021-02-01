const array = [
  [1, 2],
  [3, 4]
];
array[1] = [...new Set(array[1].concat(3))];
console.log(array);

console.log(new Date("2020-10-28T13:24:33.222Z"));
console.log(parseInt((200 / 10).toString(), 10));
console.log(null > 0);
