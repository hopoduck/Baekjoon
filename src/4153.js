const fs = require("fs");
fs.readFileSync = () =>
  ["6 8 10", "25 52 60", "5 12 13", "1 1 1", "3 4 5", "0 0 0"].join("\n");

let list = fs
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.split(" ").map(Number));

list.forEach((numbers, i) => {
  if (list.length === i + 1) return;
  const [a, b, c] = numbers.sort((a, b) => b - a);
  console.log(a ** 2 === b ** 2 + c ** 2 ? "right" : "wrong");
});
