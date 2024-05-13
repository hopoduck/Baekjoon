let fs = require("fs");
fs.readFileSync = () => "ex";

let [a, b, c] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .replace("\n", " ")
  .split(" ")
  .map((d) => Number(d));

console.log(a + b + c);
