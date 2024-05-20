const fs = require("fs");
fs.readFileSync = () =>
  ["3", "21 Junkyu", "21 Dohyun", "20 Sunyoung"].join("\n");

const users = fs
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n")
  .splice(1)
  .map((user) => {
    const [id, name] = user.split(" ");
    return [Number(id), name];
  });

console.log(
  users
    .sort(([a], [b]) => a - b)
    .map((v) => v.join(" "))
    .join("\n"),
);
