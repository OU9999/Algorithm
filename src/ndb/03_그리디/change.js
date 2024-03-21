// 거스름돈. 최소 동전갯수 구하기

const solution = (money) => {
  const coinTypes = [500, 100, 50, 10];
  let count = 0;

  coinTypes.forEach((coin) => {
    count += Math.floor(money / coin);
    money %= coin;
    console.log(count);
  });
  return count;
};

const money = 1260;
const result = solution(money);
console.log("RESULT >>>", result);
