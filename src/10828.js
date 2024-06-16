const fs = require("fs");
fs.readFileSync = () => `7
pop
top
push 123
top
pop
top
pop`;

class Stack {
  stack = [];
  result = [];

  push(x) {
    this.stack.push(x);
  }
  pop() {
    this.result.push(this.stack.pop() ?? -1);
  }
  size() {
    this.result.push(this.stack.length);
  }
  empty() {
    this.result.push(this.stack.length === 0 ? 1 : 0);
  }
  top() {
    this.result.push(this.stack[this.stack.length - 1] ?? -1);
  }
}

let [count, ...list] = fs
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n");

const stack = new Stack();
for (const command of list) {
  switch (true) {
    case command === "pop":
      stack.pop();
      break;
    case command === "size":
      stack.size();
      break;
    case command === "empty":
      stack.empty();
      break;
    case command === "top":
      stack.top();
      break;
    case command.startsWith("push"): {
      const [_, number] = command.split(" ");
      stack.push(Number(number));
      break;
    }
  }
}

console.log(stack.result.join("\n"));
