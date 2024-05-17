const fs = require("fs");
fs.readFileSync = () =>
  ["121", "1231", "12421", "23", "11", "1", "0"].join("\n");

let list = fs.readFileSync(0, "utf-8").toString().trim().split("\n");
list = list.splice(0, list.length - 1);

for (const number of list) {
  const count = Math.floor(number.length / 2);
  let result = true;
  for (let i = 0; i < count; i++) {
    result = result && number[i] === number[number.length - i - 1];
  }
  console.log(result ? "yes" : "no");
}
