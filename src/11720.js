const fs = require("fs");
fs.readFileSync = () => "25\n54321";

let list = fs
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n")
  .splice(1)[0]
  .split("")
  .map(Number);

console.log(list.reduce((a, b) => a + b));
