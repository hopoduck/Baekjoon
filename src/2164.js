const fs = require("fs");
fs.readFileSync = () => "3";

const n = Number(fs.readFileSync(0, "utf-8").toString().trim());
const list = new Array(n).fill(0).map((_, i) => i + 1);

let i = 1;
while (list.length > i) {
  if (i % 2 === 1) {
    list[list.length] = list[i];
  }
  i++;
}
console.log(list[list.length - 1]);
