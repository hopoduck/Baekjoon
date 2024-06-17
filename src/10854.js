const fs = require("fs");
fs.readFileSync = () => `15
push 1
push 2
front
back
size
empty
pop
pop
pop
size
empty
pop
push 3
empty
front`;

class Queue {
  list = [];
  result = [];

  push(value) {
    this.list.push(value);
  }

  pop() {
    this.result.push(this.list.shift() ?? -1);
  }

  size() {
    this.result.push(this.list.length);
  }

  empty() {
    this.result.push(this.list.length === 0 ? 1 : 0);
  }

  front() {
    this.result.push(this.list[0] ?? -1);
  }

  back() {
    this.result.push(this.list[this.list.length - 1] ?? -1);
  }
}

const [_, ...commands] = fs
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n");

const q = new Queue();
for (const command of commands) {
  if (q[command]) {
    q[command]();
  } else {
    const [_, n] = command.split(" ");
    q.push(n);
  }
}

console.log(q.result.join("\n"));
