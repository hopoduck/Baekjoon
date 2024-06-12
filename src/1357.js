const fs = require("fs");
fs.readFileSync = () => `1000 1`;

let [a, b] = fs
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .replace("\n", " ")
  .split(" ");

console.log(
  Number(
    (Number([...a].reverse().join("")) + Number([...b].reverse().join("")))
      .toString()
      .split("")
      .reverse()
      .join(""),
  ),
);
