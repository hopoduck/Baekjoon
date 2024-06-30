const fs = require("fs");
fs.readFileSync = () => `

2
6
22

`;

const input = fs
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n")
  .map(Number);
const [_n, ...list] = input.map(Number);

const maxN = Math.max(...list);
const fibCounts = Array.from({ length: maxN + 1 }, () => [0, 0]);

fibCounts[0] = [1, 0];
if (maxN > 0) {
  fibCounts[1] = [0, 1];
}

for (let i = 2; i <= maxN; i++) {
  fibCounts[i][0] = fibCounts[i - 1][0] + fibCounts[i - 2][0];
  fibCounts[i][1] = fibCounts[i - 1][1] + fibCounts[i - 2][1];
}

list.forEach((n) => {
  console.log(fibCounts[n].join(" "));
});
