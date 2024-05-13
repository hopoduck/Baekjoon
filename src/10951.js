const fs = require("fs");
fs.readFileSync = () => "1 1\n" + "2 3\n" + "3 4\n" + "9 8\n" + "5 2";

let [...list] = fs
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n")
  .map((value) => {
    if (!value.includes(" ")) return Number(value);
    return value.split(" ").map((number) => Number(number));
  });

list.forEach(([a, b]) => {
  console.log(a + b);
});
