// https://www.acmicpc.net/problem/10998

let fs = require("fs");
let [a, b] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .replace("\n", " ")
  .split(" ")
  .map((d) => Number(d));

console.log(a * b);

function init(param) {
  const [a, b] = param
    .toString()
    .trim()
    .replace("\n", " ")
    .split(" ")
    .map((d) => Number(d));

  console.log(a * b);
}

init("1 2");
init("3 4");
