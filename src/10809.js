const fs = require("fs");
fs.readFileSync = () => "baekjoon";

const alphabet = "abcdefghijklmnopqrstuvwxyz";
const word = fs.readFileSync(0, "utf-8").toString().trim();
const result = [];

for (const char of alphabet) {
  result.push(word.search(char));
}
console.log(result.join(" "));
