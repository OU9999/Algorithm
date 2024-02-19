// link : https://school.programmers.co.kr/learn/courses/30/lessons/132267

const solution = (a, b, n) => {
  let result = 0;
  let currentCola = n;

  while (currentCola >= a) {
    const mok = parseInt(currentCola / a);
    const giveCola = mok * a;
    const gotCola = mok * b;

    result += gotCola;
    currentCola = currentCola - giveCola + gotCola;
  }

  return result;
};

const a = 2;
const b = 1;
const n = 20;
const result = solution(a, b, n);
console.log("RESULT >>>", result);
