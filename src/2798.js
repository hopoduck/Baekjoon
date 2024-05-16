const fs = require("fs");
fs.readFileSync = () => "10 500\n93 181 245 214 315 36 185 138 216 295";

const [[_, target], cards] = fs
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

const results = new Set();

for (const card1 of cards) {
  for (const card2 of cards) {
    for (const card3 of cards) {
      if (card1 === card2 || card2 === card3 || card3 === card1) continue;
      const sum = card1 + card2 + card3;
      if (sum === target) {
        return console.log(sum);
      }
      if (sum > target) {
        continue;
      }
      results.add(sum);
    }
  }
}

console.log([...results].sort((a, b) => a - b).at(-1));
