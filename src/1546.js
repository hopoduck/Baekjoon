const fs = require("fs");
fs.readFileSync = () => ["9", "10 20 30 40 50 60 70 80 90"].join("\n");

let [_, list] = fs
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

const max = Math.max(...list);

console.log(
  list.map((v) => (v / max) * 100).reduce((p, c) => p + c, 0) / list.length,
);
