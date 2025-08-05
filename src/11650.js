const fs = require("fs");
fs.readFileSync = () => `2
1 -1
1 -2`;

let [_, ...list] = fs.readFileSync(0, "utf-8").toString().trim().split("\n");
const result = list
  .map((xy) => xy.split(" ").map(Number))
  .sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    }
    return a[1] - b[1];
  })
  .map((v) => v.join(" "))
  .join("\n");

console.log(result);
