const fs = require("fs");
fs.readFileSync = () => `3 16`;

const [min, max] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let arr = Array(max - min + 1).fill(true);

if (min === 0) arr[0] = arr[1] = false;
else if (min === 1) arr[0] = false;

for (let i = 2; i <= Math.sqrt(max); i++) {
  let start = Math.max(i * i, Math.ceil(min / i) * i);
  for (let j = start; j <= max; j += i) {
    arr[j - min] = false;
  }
}

const result = arr
  .map((isPrime, i) => (isPrime ? i + min : 0))
  .filter((e) => e);

console.log(result.join("\n"));
