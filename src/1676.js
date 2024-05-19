const fs = require("fs");
fs.readFileSync = () => "10";

let n = BigInt(fs.readFileSync(0, "utf-8").toString().trim());
let fac = 1n;
for (let i = 1n; i <= n; i++) {
  fac *= i;
}

const nn = fac.toString().split("").reverse();
for (let i = 0; i < nn.length; i++) {
  if (nn[i] !== "0") {
    console.log(i);
    break;
  }
}
