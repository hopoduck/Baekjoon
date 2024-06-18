const fs = require("fs");
fs.readFileSync = () => `5
1
5
5
7
8`;

const [_, ...list] = fs
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n")
  .map(Number);
if (list.length === 0) return console.log(0);

list.sort((a, b) => a - b);

const removeCount = Math.round(list.length * 0.15);
const resultList = list.splice(removeCount, list.length - removeCount * 2);

const result = Math.round(
  resultList.reduce((p, c) => p + c, 0) / resultList.length,
);
console.log(result);
