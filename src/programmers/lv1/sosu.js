// link : https://school.programmers.co.kr/learn/courses/30/lessons/12921

const solution = (n) => {
  let result = 0;
  let tempArr = new Array(n + 1).fill(true);
  const sqrtNum = Math.sqrt(n);
  tempArr[0] = tempArr[1] = false;

  for (let i = 2; i < sqrtNum; i++) {
    for (let j = i * i; j <= n; j += i) {
      if (!tempArr[j]) {
        continue;
      }
      tempArr[j] = false;
    }
  }

  tempArr.forEach((item) => {
    if (item) {
      result++;
    }
  });

  return result;
};

const n = 11;
const result = solution(n);
console.log("RESULT >>>", result);
