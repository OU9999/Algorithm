// link : https://school.programmers.co.kr/learn/courses/30/lessons/81301

const solution = (s) => {
  const englishArr = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  englishArr.forEach((item, idx) => {
    s = s.split(item).join(idx);
  });

  return Number(s);
};

const s = "one4seveneight";
const result = solution(s);
console.log("RESULT >>>", result);
