const fs = require("fs");
fs.readFileSync = () => `9788968322*73`; // 2
// fs.readFileSync = () => `9791194045021`; // 7

const isbn = fs.readFileSync(0, "utf-8").toString().trim();

const x = isbn.indexOf("*") + 1;
const multiplier = x % 2 === 1 ? 1 : 3;

let total = 0;

for (let i = 0; i < isbn.length; i++) {
  if (isbn[i] === "*") {
    continue;
  }

  if (i % 2 === 0) {
    total += Number(isbn[i]);
  } else {
    total += Number(isbn[i]) * 3;
  }
}

for (let index = 0; index < 10; index++) {
  if ((total + index * multiplier) % 10 === 0) {
    console.log(index);
    return index;
  }
}
