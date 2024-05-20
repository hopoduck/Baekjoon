const fs = require("fs");
fs.readFileSync = () =>
  ["5", "55 185", "58 183", "88 186", "60 175", "46 155"].join("\n");

const [_, ...numbers] = fs
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n")
  .map((n) => n.split(" ").map(Number));

const result = [];
for (let i = 0; i < numbers.length; i++) {
  const [height, weight] = numbers[i];
  let rank = 1;
  for (let j = 0; j < numbers.length; j++) {
    const [compareHeight, compareWeight] = numbers[j];
    if (i === j) continue;
    if (height < compareHeight && weight < compareWeight) {
      rank++;
    }
  }
  result.push(rank);
}

console.log(result.join(" "));
