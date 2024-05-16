// 이 풀이는 오답입니다.
const fs = require("fs");
fs.readFileSync = () => "5\nzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz";
// fs.readFileSync = () => "5\nabcde";

const alphabetMap = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26,
};
const [_, str] = fs.readFileSync(0, "utf-8").toString().trim().split("\n");
let [sum, power] = [0, 1];

for (const char of str) {
  sum += alphabetMap[char] * power;
  power *= 31;
}
console.log(Number(sum % 1234567891));
