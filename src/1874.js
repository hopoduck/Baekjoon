const fs = require("fs");

const [count, ...numbers] = fs
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let index = 1;
const stack = [];

const answer = [];
for (let i = 0; i < count; i++) {
  let num = numbers[i];

  while (index <= num) {
    stack.push(index);
    answer.push("+");
    index++;
  }

  const newNum = stack.pop();
  answer.push("-");

  if (newNum !== num) {
    console.log("NO");
    return;
  }
}

console.log(answer.join("\n"));
