const solution = (n, m, k, numbers) => {
  numbers.sort((a, b) => b - a);
  const first = numbers[0];
  const second = numbers[1];

  let count = (m / (k + 1)) * k;
  count += m % (k + 1);

  let result = 0;
  result += count * first;
  result += (m - count) * second;
  return result;
};

const n = 5;
const m = 8;
const k = 3;
const numbers = [2, 4, 5, 4, 6];
const result = solution(n, m, k, numbers);
console.log("RESULT >>>", result);
