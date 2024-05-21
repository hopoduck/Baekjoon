const fs = require("fs");
fs.readFileSync = () => ["7 3"].join("\n");

let [n, k] = fs
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split(" ")
  .map(Number);
const list = new Array(n).fill(0).map((_, i) => i + 1);
const result = [];

let i = 0;
while (true) {
  if (list.length === 0) {
    break;
  }
  i += k - 1;
  i = i % list.length;

  result.push(list.splice(i, 1));
}

console.log(`<${result.join(", ")}>`);
