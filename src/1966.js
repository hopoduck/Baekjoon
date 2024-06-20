const fs = require("fs");
fs.readFileSync = () => `3
1 0
5
4 2
1 2 3 4
6 0
1 1 9 1 1 1`;

const input = fs.readFileSync(0).toString().trim().split("\n");

let [n, ...arr] = input;
arr = arr.map((item) => item.split(" ").map(Number));
let answer = "";

for (let i = 0; i < arr.length; i += 2) {
  let count = 0;
  const 중요도 = arr[i + 1];
  let 위치 = arr[i][1];

  console.log(중요도, 위치);

  while (true) {
    const max = Math.max(...중요도);
    const number = 중요도.shift();
    if (number === max) {
      count++;
      if (위치 === 0) {
        answer += count + "\n";
        break;
      }
    } else {
      중요도.push(number);
    }

    if (위치 === 0) {
      위치 = 중요도.length - 1;
    } else {
      위치--;
    }
  }
}

console.log(answer.trim());
