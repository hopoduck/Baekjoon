const fs = require("fs");
fs.readFileSync = () => `4
3
0
4
0`;

let [count, ...list] = fs
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n")
  .map(Number);
list = list.splice(0, count);

const newList = list.reduce((p, c) => {
  c === 0 ? p.pop() : p.push(c);
  return p;
}, []);

console.log(newList.reduce((p, c) => p + c, 0));
