const fs = require("fs");
fs.readFileSync = () =>
  [
    "13",
    "but",
    "i",
    "wont",
    "hesitate",
    "no",
    "more",
    "no",
    "more",
    "it",
    "cannot",
    "wait",
    "im",
    "yours",
  ].join("\n");

let [_, ...list] = fs.readFileSync(0, "utf-8").toString().trim().split("\n");
const set = new Set(list);
list = [...set];

list.sort();
list.sort((a, b) => a.length - b.length);

console.log(list.join("\n"));
