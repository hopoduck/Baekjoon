const fs = require("fs");
fs.readFileSync = () => `30
40
50`;

const [a, b, c] = fs
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

console.log(a + b - c);
console.log(a.toString() + b.toString() - c);
