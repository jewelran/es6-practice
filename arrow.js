function doubleIt(n) {
  return n * 2;
}
const result = doubleIt(12, 2);
// console.log(result);
// single prameter...with arrow function.....
const doubleIt2 = (num) => num * 2;
const result2 = doubleIt2(14);
// console.log(result2)
// multiple parameter with arrow function.............
const add = (x, y) => x + y;
const result3 = add(12, 34);
console.log(result3);

// without parameter with arrow function...............
const gitv5 = () => 5;
const result4 = gitv5();
console.log(result4);

// largest arrow function

const doMath = (x, y) => {
  const sum = x + y;
  const diff = x - y;
  const result = sum * diff;
  return result;
};
const result5 = doMath(23, 12);
console.log(result5);
