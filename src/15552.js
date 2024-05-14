const fs = require("fs");
fs.readFileSync = () =>
  "5\n" + "1 1\n" + "12 34\n" + "5 500\n" + "40 60\n" + "1000 1000";

let list = fs.readFileSync(0, "utf-8").toString().trim().split("\n").splice(1);
let message = "";
for (const numbers of list) {
  const [a, b] = numbers.split(" ").map(Number);
  message += `${Number(a) + Number(b)}\n`;
}
console.log(message);
