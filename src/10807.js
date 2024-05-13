const fs = require("fs");
fs.readFileSync = () => ["11", "1 4 1 2 4 2 4 2 3 4 4", "2"].join("\n");

let [_, list, v] = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

v = Number(v);
list = list.split(" ").map(Number);
let cnt = 0;
for (const n of list) {
  if (v === n) {
    cnt += 1;
  }
}
console.log(cnt);
