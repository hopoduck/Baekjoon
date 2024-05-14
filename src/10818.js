const fs = require("fs");
fs.readFileSync = () => "5\n20 10 35 30 7";

let list = fs
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n")
  .splice(1)[0]
  .split(" ")
  .map(Number);

const [min, max] = [Math.min(...list), Math.max(...list)];
console.log(`${min} ${max}`);
