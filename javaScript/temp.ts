// @ts-ignore
const myMap = new Map();
myMap.set("name", "bob");
console.log(myMap);

class People<T> {
  constructor(readonly name:T) {}
  print(): void {
    console.log(this.name);
  }
}
// const people = new People<number>("bob");
// people.print();

// people.print.call(new People("alice"));
// console.log([1,2].indexOf(1))
const arr: number[][] = [[1]];
console.log([].concat.apply([], [[]]))
