// link : https://school.programmers.co.kr/learn/courses/30/lessons/12985

const solution = (n, a, b) => {
  let answer = 0;

  while (a !== b) {
    if (a % 2 !== 0) {
      a += 1;
    }

    if (b % 2 !== 0) {
      b += 1;
    }

    a = a / 2;
    b = b / 2;

    answer += 1;
  }

  return answer;
};

const n = 8;
const a = 4;
const b = 7;
const result = solution(n, a, b);

console.log("RESULT >>>", result);
