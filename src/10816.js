const fs = require("fs");
fs.readFileSync = () => `10
6 3 2 10 10 10 -10 -10 7 3
8
10 9 -5 2 3 4 5 -10`;

const map = {};
let [m, cards, n, list] = fs
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n");
cards = cards.split(" ").map(Number);
list = list.split(" ").map(Number);
cards.map((v) => {
  map[v] = map[v] === undefined ? 1 : map[v] + 1;
});

console.log(list.map((v) => map[v] ?? 0).join(" "));
