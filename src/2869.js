const fs = require("fs");
fs.readFileSync = () => ["100 99 1000000000"].join("\n");

let [a, b, v] = fs
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const perDay = a - b;
const lastDay = v - a;
console.log(Math.ceil(lastDay / perDay) + 1);
