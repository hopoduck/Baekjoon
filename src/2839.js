const fs = require("fs");
fs.readFileSync = () => "4";

const n = Number(fs.readFileSync(0, "utf-8").toString().trim());
const max = parseInt(n / 5);

for (let i = max; i >= 0; i--) {
  const v = (n - 5 * i) / 3;
  const r = i + v;
  if (r % 1 === 0) {
    return console.log(r);
  }
}
console.log(-1);
