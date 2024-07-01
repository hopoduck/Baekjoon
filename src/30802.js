const fs = require("fs");
fs.readFileSync = () => `

23
3 1 4 1 5 9
5 7

`;

const [[n], sizes, [minT, minP]] = fs
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n")
  .map((str) => str.split(" ").map(Number));

let [nt, np, npp] = [0, 0, 0];

sizes.forEach((size) => {
  nt += Math.ceil(size / minT);
});
np = Math.floor(n / minP);
npp = n % minP;

console.log(nt);
console.log([np, npp].join(" "));
