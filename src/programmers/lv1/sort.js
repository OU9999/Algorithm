// link : "https://school.programmers.co.kr/learn/courses/30/lessons/42748"

const solution = (array, commands) => {
  let result = [];
  commands.forEach(([first, second, third]) => {
    const testArr = array.slice(first - 1, second);
    testArr.sort((a, b) => a - b);
    const chooseNum = testArr[third - 1];
    result.push(chooseNum);
  });

  return result;
};

const array = [1, 5, 2, 6, 3, 7, 4];
const commands = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
];
const result = solution(array, commands);
console.log("RESULT >>>", result);
