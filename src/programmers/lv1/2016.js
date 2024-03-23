// link : https://school.programmers.co.kr/learn/courses/30/lessons/12901

const solution = (a, b) => {
  const day = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
  const date = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  let numCount = 0;
  let index = 0;

  for (let i = 0; i < a - 1; i++) {
    numCount += date[i];
  }

  numCount += b;

  index = (numCount - 1) % 7;

  return day[index];
};

const a = 5;
const b = 24;
const result = solution(a, b);
console.log("RESULT >>>", result);
