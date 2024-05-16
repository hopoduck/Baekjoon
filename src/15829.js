/**
 * https://cotist.tistory.com/37
 * - JavaScript의 Number는 최대 9007199254740991 (2의 53승 - 1)까지만 정확하게 표현할 수 있다
 * - 따라서 그보다 큰 수는 BigInt를 사용하여야 함
 * - 숫자 뒤에 n을 붙여 사용하거나 BigInt() 형태로 사용할 수 있다.
 */

const fs = require("fs");
fs.readFileSync = () => "5\nzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz";
// fs.readFileSync = () => "5\nabcde";

const alphabetMap = {
  a: 1n,
  b: 2n,
  c: 3n,
  d: 4n,
  e: 5n,
  f: 6n,
  g: 7n,
  h: 8n,
  i: 9n,
  j: 10n,
  k: 11n,
  l: 12n,
  m: 13n,
  n: 14n,
  o: 15n,
  p: 16n,
  q: 17n,
  r: 18n,
  s: 19n,
  t: 20n,
  u: 21n,
  v: 22n,
  w: 23n,
  x: 24n,
  y: 25n,
  z: 26n,
};
const [_, str] = fs.readFileSync(0, "utf-8").toString().trim().split("\n");
let [sum, power] = [0n, 1n];

for (const char of str) {
  sum += alphabetMap[char] * power;
  power *= 31n;
}
console.log(Number(sum % 1234567891n));
