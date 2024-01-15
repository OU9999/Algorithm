// link : https://school.programmers.co.kr/learn/courses/30/lessons/42842

const solution = (brown, yellow) => {
  const sum = brown + yellow;
  const resultSum = (brown + 4) / 2;

  // a * b = sum , a + b = resultSum

  for (let a = resultSum; a > 0; a--) {
    let b = resultSum - a;
    if (a * b === sum) {
      return [a, b];
    }
  }
};

const brown = 8;
const yellow = 1;
const result = solution(brown, yellow);
console.log("RESULT >>>", result);
