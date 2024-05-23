// link : https://school.programmers.co.kr/learn/courses/30/lessons/43165

const solution = (numbers, target) => {
  let result = 0;

  const dfs = (idx, sum) => {
    if (idx === numbers.length) {
      if (sum === target) result++;
      return;
    }

    dfs(idx + 1, sum + numbers[idx]);
    dfs(idx + 1, sum - numbers[idx]);
  };

  dfs(0, 0);

  return result;
};

const numbers = [1, 1, 1, 1, 1];
const target = 3;
const result = solution(numbers, target);
console.log("RESULT >>>", result);
