const fs = require("fs");
fs.readFileSync = () =>
  ["2", "6 12 10", "30 50 72", "60 80 100", "5 5 5", "1 5 5"].join("\n");

let list = fs
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n")
  .splice(1)
  .map((v) => v.split(" ").map(Number));

list.forEach(([h, _, n]) => {
  const a = n % h;
  const b = Math.trunc(n / h) + 1;
  if (a === 0) {
    console.log(h * 100 + (b - 1));
  } else {
    console.log(a * 100 + b);
  }
});
