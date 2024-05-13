// https://www.acmicpc.net/problem/10699

const KR_TIME_OFFSET = 9 * 60 * 1000;
const date = Date.now() + KR_TIME_OFFSET;

console.log(new Date(date).toISOString().substring(0, 10));
