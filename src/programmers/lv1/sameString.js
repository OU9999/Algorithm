// link : https://school.programmers.co.kr/learn/courses/30/lessons/142086

const solution = (s) => {
  const splitword = s.split("");
  let result = [];
  splitword.forEach((word, idx) => {
    let number = -1;
    for (let i = idx - 1; i >= 0; i--) {
      const checkWord = splitword[i];

      if (word === checkWord) {
        if (number !== -1) {
          break;
        }

        const diff = idx - i;
        number = diff;
      }
    }
    result.push(number);
  });

  return result;
};

const s = "banana";
const result = solution(s);
console.log("RESULT >>>", result);
