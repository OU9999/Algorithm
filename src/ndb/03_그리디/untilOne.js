const solution = (n, k) => {
  let count = 0;

  while (n >= k) {
    if (n % k !== 0) {
      n--;
      count++;
    }
    n /= k;
    count++;
  }

  while (n > 1) {
    n--;
    count++;
  }
  return count;
};

const n = 25;
const k = 3;
const result = solution(n, k);
console.log("RESULT >>>", result);
