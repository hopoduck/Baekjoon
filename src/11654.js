const fs = require("fs");
fs.readFileSync = () => "A";

let string = fs.readFileSync(0, "utf-8").toString().trim();

console.log(string.charCodeAt(0));
