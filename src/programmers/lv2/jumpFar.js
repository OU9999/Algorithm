// link : https://school.programmers.co.kr/learn/courses/30/lessons/12914

const solution = (n) => {
  let dp = new Array(n + 1);

  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1234567;
  }

  const answer = dp[n];

  return answer;
};

const n = 4;
const result = solution(n);
console.log("RESULT >>>", result);
