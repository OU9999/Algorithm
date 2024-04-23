// link : https://school.programmers.co.kr/learn/courses/30/lessons/42840

const solution = (answers) => {
  const first = [1, 2, 3, 4, 5];
  const second = [2, 1, 2, 3, 2, 4, 2, 5];
  const third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let tempArr = [0, 0, 0];
  let result = [];

  answers.forEach((e, idx) => {
    if (e === first[idx % first.length]) {
      tempArr[0]++;
    }

    if (e === second[idx % second.length]) {
      tempArr[1]++;
    }

    if (e === third[idx % third.length]) {
      tempArr[2]++;
    }
  });

  let maxValue = Math.max(...tempArr);

  tempArr.forEach((e, idx) => {
    if (e === maxValue) {
      result.push(idx + 1);
    }
  });

  return result;
};

const answers = [1, 3, 2, 4, 2];
const result = solution(answers);
console.log("RESULT >>>", result);
