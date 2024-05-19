const fs = require("fs");
fs.readFileSync = () =>
  [
    "5",
    "5",
    "4",
    "3",
    "2",
    "1",
    5,
    412,
    312,
    3,
    2,
    23123,
    324,
    134,
    5134,
    2,
    42314,
  ].join("\n");

const [_, ...numbers] = fs
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n")
  .map((d) => Number(d));

console.log(numbers.sort((a, b) => a - b).join("\n"));
