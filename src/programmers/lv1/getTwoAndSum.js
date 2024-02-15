// link : https://school.programmers.co.kr/learn/courses/30/lessons/68644

const solution = (numbers) => {
  let result = [];
  numbers.forEach((num, idx) => {
    for (let i = 0; i < numbers.length; i++) {
      if (i === idx) {
        break;
      }

      const sumNumber = num + numbers[i];
      if (!result.includes(sumNumber)) result.push(sumNumber);
    }
  });

  result.sort((a, b) => a - b);

  return result;
};

const numbers = [2, 1, 3, 4, 1];
const result = solution(numbers);
console.log("RESULT >>>>", result);
