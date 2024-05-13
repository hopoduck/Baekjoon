const fs = require("fs");
fs.readFileSync = () =>
  [
    "3",
    "1",
    "4",
    "5",
    "7",
    "9",
    "6",
    "10",
    "11",
    "12",
    "13",
    "8",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
  ].join("\n");

const set = new Set(new Array(30).fill(0).map((_, i) => i + 1));
let list = fs
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .replaceAll("\n", " ")
  .split(" ")
  .map((d) => Number(d));
list.map((value) => set.delete(value));
list = [...set].sort((a, b) => a - b);
list.forEach((v) => console.log(v));
