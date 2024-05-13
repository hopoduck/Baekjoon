const fs = require("fs");
fs.readFileSync = () => "10 5\n" + "1 10 4 9 2 3 8 5 7 6";

let [a, b] = fs.readFileSync(0, "utf-8").toString().trim().split("\n");
const [_, x] = a.split(" ").map((v) => Number(v));
const list = b.split(" ").map(Number);
console.log(list.filter((v) => x > v).join(" "));
