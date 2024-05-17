const fs = require("fs");
fs.readFileSync = () => ["2", "1", "3", "2", "3"].join("\n");

let [_, ...list] = fs
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

// 아파트 초기화
const apart = new Array(15).fill(0).map(() => []);
for (let i = 0; i < 15; i++) {
  apart[0][i] = i;
}
for (let i = 0; i < 15; i++) {
  apart[i][0] = 0;
}

for (let i = 1; i < 15; i++) {
  for (let j = 1; j < 15; j++) {
    apart[i][j] = apart[i - 1][j] + apart[i][j - 1];
  }
}

for (let i = 0; i < list.length; i += 2) {
  const [k, n] = [list[i], list[i + 1]];
  console.log(apart[k][n]);
}
