// link : https://school.programmers.co.kr/learn/courses/30/lessons/12949

const solution = (arr1, arr2) => {
  let answer = [];
  let x_length = arr1.length;
  let y_length = arr2[0].length;
  let x1_length = arr1[0].length;

  for (let i = 0; i < x_length; i++) {
    let temp = [];

    for (let j = 0; j < y_length; j++) {
      let sum = 0;
      for (let k = 0; k < x1_length; k++) {
        sum += arr1[i][k] * arr2[k][j];
      }

      temp.push(sum);
    }

    answer.push(temp);
  }

  return answer;
};

const arr1 = [
  [1, 4],
  [3, 2],
  [4, 1],
];
const arr2 = [
  [3, 3],
  [3, 3],
];
const result = solution(arr1, arr2);
console.log("RESULT >>>", result);
