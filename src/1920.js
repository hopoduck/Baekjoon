const fs = require("fs");
fs.readFileSync = () => ["5", "4 1 5 2 3", "5", "1 3 7 9 5"].join("\n");

const parse = (string) => string.split(" ").map(Number);
let [_, set, __, target] = fs
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n")
  .map(parse);
let result = "";

const setObject = new Set(set);
target.forEach((element) => {
  result += setObject.has(element) ? "1\n" : "0\n";
});

console.log(result.trim());
