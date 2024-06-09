// TODO: 틀렸습니다. 나옴..
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

const lines = fs.readFileSync(0, "utf-8").toString().trim().split("\n");
const regex = /[()[\]]/g;

const r = lines.map((line, i) => {
  const stack = [];
  const array = [...line.matchAll(regex)];
  for (const [char] of array) {
    switch (char) {
      case "(":
        stack.push(char);
        break;
      case ")":
        if (stack.pop() !== "(") {
          return "no";
        }
        break;
      case "[":
        stack.push(char);
        break;
      case "]":
        if (stack.pop() !== "[") {
          return "no";
        }
        break;
    }
  }
  if (stack.length !== 0) {
    return "no";
  }
  return "yes";
});
console.log(r.join("\n").trim());
