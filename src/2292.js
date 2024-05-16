const fs = require("fs");
fs.readFileSync = () => "13";

let target = Number(fs.readFileSync(0, "utf-8").toString().trim());
let i = 0;

if (target === 1) {
  return console.log(1);
}

while (target > 1) {
  target -= 6 * i;
  i += 1;
}

console.log(i);
