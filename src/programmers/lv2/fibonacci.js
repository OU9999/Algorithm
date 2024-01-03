// link : https://school.programmers.co.kr/learn/courses/30/lessons/12945

const solution = (n) => {
  let first = 0;
  let second = 1;
  let nTarget = 0;
  for (let i = 2; i <= n; i++) {
    nTarget = (first + second) % 1234567;
    first = second;
    second = nTarget;
  }

  return nTarget;
};

const n = 123;
const result = solution(n);
console.log("RESULT >>>", result);
