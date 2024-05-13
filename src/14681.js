const fs = require("fs");
fs.readFileSync = () => "9\n-13";

let [x, y] = fs
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .replace("\n", " ")
  .split(" ")
  .map((d) => Number(d));

if (x > 0) {
  if (y > 0) {
    console.log(1);
  } else {
    console.log(4);
  }
} else {
  if (y > 0) {
    console.log(2);
  } else {
    console.log(3);
  }
}
