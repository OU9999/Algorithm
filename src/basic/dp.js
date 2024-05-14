const fibo = (idx, memo = {}) => {
  if (idx <= 2) return 1;
  if (idx in memo) return memo[idx];
  memo[idx] = fibo(idx - 1, memo) + fibo(idx - 2, memo);
  console.log(memo);
  return memo[idx];
};

const ret = fibo(50);
console.log(ret);
