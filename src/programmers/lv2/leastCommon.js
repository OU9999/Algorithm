// link : https://school.programmers.co.kr/learn/courses/30/lessons/12953

// 최대공약수
const gcd = (a, b) => {
  let remain = a % b;

  if (remain == 0) return b;

  return gcd(b, remain);
};

// 최소공배수
const lcm = (a, b) => {
  return (a * b) / gcd(a, b);
};

const solution = (arr) => {
  let answer = 0;

  let value = arr[0];

  for (let i = 1; i < arr.length; i++) {
    value = lcm(value, arr[i]);
  }

  answer = value;

  return answer;
};

const arr = [2, 6, 8, 14];
const result = solution(arr);
console.log("RESULT >>>", result);
