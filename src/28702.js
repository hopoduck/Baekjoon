const fs = require("fs");
fs.readFileSync = () => `

11
Fizz
13

`;

const list = fs.readFileSync(0, "utf-8").toString().trim().split("\n");
const [a, b, c] = list.map(Number);

let nextNumber;
if (!isNaN(c)) {
  nextNumber = c + 1;
} else if (!isNaN(b)) {
  nextNumber = b + 2;
} else if (!isNaN(a)) {
  nextNumber = a + 3;
}

let message = "";
if (nextNumber % 3 === 0) {
  message += "Fizz";
}
if (nextNumber % 5 === 0) {
  message += "Buzz";
}
console.log(message || nextNumber);
