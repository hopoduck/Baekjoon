const fs = require("fs");
fs.readFileSync = () =>
  ["3 3", "1 1 1", "2 2 2", "0 1 0", "3 3 3", "4 4 4", "5 5 100"].join("\n");
// fs.readFileSync = () =>
//   [
//     "4 3",
//     "1 2 3 4",
//     "5 6 7 8",
//     "9 10 11 12",
//     "13 14 15 16",
//     "17 18 19 20",
//     "21 22 23 24",
//   ].join("\n");
fs.readFileSync = () =>
  [
    "4 3",
    "1 2 3",
    "4 5 6",
    "7 8 9",
    "10 11 12",
    "13 14 15",
    "16 17 18",
    "19 20 21",
    "22 23 24",
  ].join("\n");

let [nm, ...data] = fs.readFileSync(0, "utf-8").toString().trim().split("\n");
const [n, m] = nm.split(" ").map(Number);
data = data.map((v) => v.split(" ").map(Number));

const result = new Array(n).fill(0).map(() => new Array(m).fill(0));
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    result[i][j] = data[i][j] + data[i + n][j];
  }
}

console.log(result.map((l) => l.join(" ")).join("\n"));
