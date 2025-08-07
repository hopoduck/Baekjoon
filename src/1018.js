const fs = require("fs");
fs.readFileSync = () => `8 8
WBWBWBWB
BWBWBWBW
WBWBWBWB
BWBBBWBW
WBWBWBWB
BWBWBWBW
WBWBWBWB
BWBWBWBW`;

const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");
const TARGET_SIZE = 8;

let [size, ...board] = input;
const [y, x] = size.split(" ").map(Number);

const startB = [
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
];
const startW = [
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
];

function checkBoard([startX, startY], board) {
  let result;
  let w = 0;
  let b = 0;
  for (let i = 0; i < TARGET_SIZE; i++) {
    for (let j = 0; j < TARGET_SIZE; j++) {
      const [x, y] = [j + startX, i + startY];

      if (board[y][x] === startB[j][i]) {
        b += 1;
      }
      if (board[y][x] === startW[j][i]) {
        w += 1;
      }
    }
  }
  result = Math.min(b, w);
  return result;
}

const resultList = [];
for (let i = 0; i < y - TARGET_SIZE + 1; i++) {
  for (let j = 0; j < x - TARGET_SIZE + 1; j++) {
    const r = checkBoard([j, i], board);
    resultList.push(r);
  }
}

console.log(Math.min(...resultList));
