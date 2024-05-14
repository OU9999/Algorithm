// link : https://school.programmers.co.kr/learn/courses/30/lessons/43105

// let memo = new Array(triangle.length).fill([]);
// let memo = Array.from({ length: triangle.length }, () => []);
// 위 아래가 다른 이유 찾을것

const solution = (triangle) => {
  let dp = triangle.map((row) => [...row]);

  for (let i = triangle.length - 2; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      dp[i][j] += Math.max(dp[i + 1][j], dp[i + 1][j + 1]);
    }
  }

  return dp[0][0];
};

const triangle = [[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]];
const result = solution(triangle);
console.log("RESULT >>>", result);
