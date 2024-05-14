const fs = require("fs");
fs.readFileSync = () => ["Sprout", "3"].join("\n");

let [word, i] = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

console.log(word[Number(i) - 1]);
