// link : https://school.programmers.co.kr/learn/courses/30/lessons/138477

const solution = (k, score) => {
  let winner = [];
  let honor = [];
  score.forEach((item) => {
    honor.push(item);
    if (honor.length > k) {
      honor.sort((a, b) => a - b);
      honor.shift();
      winner.push(honor[0]);
    } else {
      honor.sort((a, b) => a - b);
      winner.push(honor[0]);
    }
  });

  return winner;
};

const k = 3;
const score = [10, 100, 20, 150, 1, 100, 200];
const result = solution(k, score);
console.log("RESULT >>>", result);
