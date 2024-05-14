const fs = require("fs");
fs.readFileSync = () => ["4", "1 3 5 7"].join("\n");

let list = fs
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n")
  .pop()
  .split(" ")
  .map(Number);

let count = 0;
list.forEach((number) => {
  if (number <= 1) return;
  for (let i = 2; i * i <= number; i++) {
    if (number % i === 0) {
      return;
    }
  }
  count += 1;
});

console.log(count);
