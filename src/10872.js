const fs = require("fs");
fs.readFileSync = () => "10";

let [a] = fs
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .replace("\n", " ")
  .split(" ")
  .map((d) => Number(d));

let value = 1;
for (let i = 0; i < a; i++) {
  value *= i + 1;
}
console.log(value);
