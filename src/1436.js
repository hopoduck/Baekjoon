const fs = require("fs");
fs.readFileSync = () => "187";

let n = Number(fs.readFileSync(0, "utf-8").toString().trim());
let cnt = 0;
let i = 0;

while (n !== cnt) {
  i++;
  if (i.toString().includes("666")) {
    cnt++;
  }
}
console.log(i);
