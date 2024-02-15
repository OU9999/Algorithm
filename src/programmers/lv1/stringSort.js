// link : "https://school.programmers.co.kr/learn/courses/30/lessons/12915"

const solution = (strings, n) => {
  strings.sort((a, b) => {
    if (a[n] !== b[n]) {
      return a[n] > b[n] ? 1 : -1;
    }

    return a > b ? 1 : -1;
  });

  return strings;
};

const strings = ["sun", "bed", "car"];
const n = 1;
const result = solution(strings, n);
console.log("RESULT >>>", result);
