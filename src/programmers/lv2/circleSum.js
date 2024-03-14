// link : https://school.programmers.co.kr/learn/courses/30/lessons/131701

const solution = (elements) => {
  let answer = 0;
  let temp = [];

  for (let i = 0; i < elements.length; i++) {
    for (let j = 0; j < elements.length; j++) {
      let value = elements.slice(j, j + i);

      if (j + i > elements.length) {
        value = [...value, ...elements.slice(0, j + i - elements.length)];
      }

      temp.push(value.reduce((sum, e) => sum + e, 0));
    }
  }

  temp = [...new Set(temp)];

  answer = temp.length;

  return answer;
};

const elements = [7, 9, 1, 1, 4];
const result = solution(elements);
console.log("RESULT >>>", result);
