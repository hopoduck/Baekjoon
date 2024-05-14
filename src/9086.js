const fs = require("fs");
fs.readFileSync = () =>
  [
    "3",
    "ACDKJFOWIEGHE",
    "O",
    "AB",
    "AVBWDACW",
    "Q",
    "QLkjoOIWAJDWQDJLKASD",
  ].join("\n");

let words = fs.readFileSync(0, "utf-8").toString().trim().split("\n").splice(1);
words.forEach((word) => {
  console.log(word[0] + word[word.length - 1]);
});
