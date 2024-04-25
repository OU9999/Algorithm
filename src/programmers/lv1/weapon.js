// link : https://school.programmers.co.kr/learn/courses/30/lessons/136798

const getDivisor = (num) => {
  let count = 0;
  const sqrtNumber = Math.sqrt(num);

  for (let i = 1; i <= sqrtNumber; i++) {
    if (sqrtNumber === i) {
      count++;
    } else if (num % i === 0) {
      count += 2;
    }
  }

  return count;
};

const solution = (number, limit, power) => {
  let tempArr = [];
  let result = 0;

  for (let i = 1; i <= number; i++) {
    const divisor = getDivisor(i);
    tempArr.push(divisor);
  }

  tempArr.forEach((item) => {
    let weapon = item;
    if (weapon > limit) {
      weapon = power;
    }
    result += weapon;
  });

  return result;
};

const number = 5;
const limit = 3;
const power = 2;
const result = solution(number, limit, power);
console.log("RESULT >>>", result);
