// link : https://school.programmers.co.kr/learn/courses/30/lessons/12980

const solution = (n) => {
  let answer = 1;

  while (n !== 1) {
    n = n / 2;

    if (n % 1 !== 0) {
      n = Math.floor(n);

      answer += 1;
    }
  }

  return answer;
};

const n = 6;
const result = solution(n);
console.log("RESULT >>>", result);
