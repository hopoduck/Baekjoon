const fs = require("fs");
fs.readFileSync = () => `3
((
))
())(()`;

const [_, ...list] = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

/**
 *
 * @param {String} str
 */
const test = (str) => {
  const list = str.split("");
  const stack = [];

  let data = "YES";
  for (const char of list) {
    if (char === "(") {
      stack.push(char);
    } else if (stack[stack.length - 1] === "(") {
      stack.pop();
    } else {
      data = "NO";
      break;
    }
  }
  if (stack.length > 0) {
    data = "NO";
  }

  console.log(data);
};

list.forEach(test);
