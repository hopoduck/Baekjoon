const fs = require("fs");
fs.readFileSync = () => `

3
0
0
-1

`;

const [_count, ...list] = fs
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

list.sort((a, b) => a - b);

const avg = Math.round(list.reduce((p, c) => p + c, 0) / list.length);
console.log(avg === 0 ? 0 : avg);
console.log(list[Math.floor(list.length / 2)]);
const counter = {};
list.forEach((number) => {
  if (counter[number] === undefined) {
    counter[number] = 1;
  } else {
    counter[number] = counter[number] + 1;
  }
});
const max = Math.max(...Object.values(counter));
const many = Object.entries(counter)
  .filter(([_, value]) => value === max)
  .map(([key]) => Number(key))
  .sort((a, b) => a - b);
console.log(many.length > 1 ? many[1] : many[0]);
console.log(list[list.length - 1] - list[0]);
