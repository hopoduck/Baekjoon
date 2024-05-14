const fs = require("fs");
fs.readFileSync = () => "WrongAnswer";

let string = fs.readFileSync(0, "utf-8").toString().trim();
const list = [];

for (const char of string) {
  list.push(
    char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase(),
  );
}

console.log(list.join(""));
