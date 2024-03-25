const solution = (n, arr) => {
  let count = 0;

  arr.sort((a, b) => a - b);
  arr.forEach((e, idx) => {
    if (e === arr[idx + 1]) {
      count++;
    }
  });

  return count;
};

const n = 5;
const arr = [2, 3, 1, 2, 2];
const result = solution(n, arr);
console.log("RESULT >>>", result);
