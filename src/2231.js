const fs = require("fs");
fs.readFileSync = () => "216";

const n = Number(fs.readFileSync(0, "utf-8").toString().trim());

for (let result = 1; result < n; result++) {
  const a =
    result +
    result
      .toString()
      .split("")
      .map(Number)
      .reduce((a, b) => a + b, 0);
  if (a === n) {
    return console.log(result);
  }
}
console.log(0);
