const fs = require("fs");
fs.readFileSync = () =>
  [
    "So when I die (the [first] I will see in (heaven) is a score list).",
    "[ first in ] ( first out ).",
    "Half Moon tonight (At least it is better than no Moon at all].",
    "A rope may form )( a trail in a maze.",
    "Help( I[m being held prisoner in a fortune cookie factory)].",
    "([ (([( [ ] ) ( ) (( ))] )) ]).",
    " .",
    ".",
  ].join("\n");

const lines = fs.readFileSync(0, "utf-8").toString().trimEnd().split("\n");
const regex = /[()[\]]/g;

const result = [];
for (const line of lines) {
  if (line === ".") break;
  const stack = [];
  const array = [...line.matchAll(regex)];
  let comment = "yes";
  for (const [char] of array) {
    switch (char) {
      case "(":
        stack.push(char);
        break;
      case ")":
        if (stack.pop() !== "(") {
          comment = "no";
        }
        break;
      case "[":
        stack.push(char);
        break;
      case "]":
        if (stack.pop() !== "[") {
          comment = "no";
        }
        break;
    }
  }
  if (stack.length !== 0) {
    comment = "no";
  }
  result.push(comment);
}
console.log(result.join("\n").trim());
