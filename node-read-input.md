# Node.js 로 백준에서 입력값 받아오기

## 숫자로 가져오기

```js
const fs = require("fs");
fs.readFileSync = () => "1 2 3";

let [a, b, c] = fs
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .replace("\n", " ")
  .split(" ")
  .map((d) => Number(d));
```

## 문자열로 가져오기

```js
const fs = require("fs");
fs.readFileSync = () => "a b c";

let [a, b, c] = fs
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .replace("\n", " ")
  .split(" ")
```

### 추가 정보

- [Node.js사용 시 런타임 오류 발생](https://www.acmicpc.net/board/view/137718)
