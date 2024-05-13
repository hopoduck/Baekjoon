let fs = require("fs");
fs.readFileSync = () => "-2 5";

let [a, b] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .replace("\n", " ")
  .split(" ")
  .map((d) => Number(d));

console.log(Math.abs(a - b));
