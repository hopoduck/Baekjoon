const fs = require("fs");
fs.readFileSync = () => `5 2`;
fs.readFileSync = () => `10 3`;
fs.readFileSync = () => `1 0`;

const [n, k] = fs
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

if (n === 0 || k === 0) {
  console.log(1);
  return;
}

function factorial(num) {
  if (num === 0) {
    return 1;
  }

  let r = num;
  for (let i = 1; i < num; i++) {
    r *= i;
  }
  return r;
}

console.log(factorial(n) / (factorial(k) * factorial(n - k)));
