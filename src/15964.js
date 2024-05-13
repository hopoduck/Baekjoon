const fs = require("fs");
fs.readFileSync = () => "3 4";

let [a, b] = fs
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .replace("\n", " ")
  .split(" ")
  .map((d) => Number(d));
console.log((a + b) * (a - b));
