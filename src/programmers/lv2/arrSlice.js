// link : https://school.programmers.co.kr/learn/courses/30/lessons/87390

/*
const solutionBad = (n, left, right) => {
  let temp = [];

  for (let i = 1; i <= n; i++) {
    let arrElement = new Array(n).fill(i).map((e, idx) => {
      if (i > idx) {
        return i;
      }
      return idx + 1;
    });

    temp.push(...arrElement);
  }

  let result = temp.slice(left, right + 1);

  return result;
};

문제를 너무 1차원적으로 생각했음.
배열을 만들어서 하는건 좋지만 
메모리가 크게 소요됨. 수학적 접근 필요
 */

const solution = (n, left, right) => {
  let result = [];

  while (left <= right) {
    let value = [Math.floor(left / n), left % n];
    value[0] = Math.max(value[0], value[1]);
    result.push(value[0] + 1);

    left++;
  }

  return result;
};

const n = 3;
const left = 2;
const right = 5;
const result = solution(n, left, right);
console.log("RESULT >>>", result);
