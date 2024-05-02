// link : https://school.programmers.co.kr/learn/courses/30/lessons/161989?language=javascript

const solution = (n, m, section) => {
  let result = 0;
  let tempArr = new Array(n + 1).fill(false);

  section.forEach((e) => {
    tempArr[e] = true;
  });

  for (let i = 1; i < tempArr.length; i++) {
    if (tempArr[i]) {
      result++;
      i += m - 1;
    }
  }

  return result;
};

const n = 8;
const m = 4;
const section = [2, 3, 6];
const result = solution(n, m, section);
console.log("RESULT >>>", result);
