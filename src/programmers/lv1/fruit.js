// link : https://school.programmers.co.kr/learn/courses/30/lessons/135808

const solution = (k, m, score) => {
  let result = 0;

  score.sort((a, b) => b - a);

  for (let i = 0; i <= score.length; i += m) {
    const sliceArr = score.slice(i, i + m);
    if (sliceArr.length !== m) break;
    const minValue = Math.min(...sliceArr);
    result += minValue * m;
  }

  return result;
};

const k = 4;
const m = 3;
const score = [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2];
const result = solution(k, m, score);
console.log("RESULT >>>", result);
