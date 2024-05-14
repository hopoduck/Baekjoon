const fs = require("fs");
fs.readFileSync = () => "pulljima";

let string = fs.readFileSync(0, "utf-8").toString().trim();

console.log(string.length);
