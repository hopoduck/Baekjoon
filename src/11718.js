const fs = require("fs");
fs.readFileSync = () => ["Hello", "Baekjoon", "Online Judge"].join("\n");

let word = fs.readFileSync(0, "utf-8").toString();
console.log(word);
